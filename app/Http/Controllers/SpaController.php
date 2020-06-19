<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacts;

class SpaController extends Controller
{
	public function spa()
	{
    	return view('layouts.app');
	}

	public function skills()
	{
    	return ['Laravel','Codeigniter','VueJS','Jquery'];
	}

	public function languages()
	{
	    return [
	    			['title' => 'Laravel','description'=>'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.'],
	    			['title' => 'Codeigniter','description'=>'CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.'],
	    			['title' => 'Vuejs','description'=>'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.'],
	    			['title' => 'Jquery','description'=>'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.'],
	    			['title' => 'Java','description'=>'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA),meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.'],
			   ];

	}

 	public function addContact(Request $request)
 	{
 		$this->validate(request(),[
            'name' => 'required',
            'email' => 'required|email|max:255',
            'question' => 'required'
        ]);
        
        $response = Contacts::Create($request->all());

        if ($response) 
            return response()->json(['success' => true, 'message' => 'Message Sent !','response'=>$response]);
        else 
            return response()->json(['success' => false, 'message' => 'Something went wrong.. Please try again later !']);
 	}

 	public function contacts()
 	{
 		$contacts = Contacts::latest()->get();
 		$response = [];
 		foreach ($contacts as $contact) {
 			$responseData = [];
 			$responseData['title'] = $contact->name;
 			$responseData['description'] = $contact->question;
 			$response[] = $responseData;
 		}
 		return $response;
 	}
}
