<?php

namespace App\Http\Controllers;

use App\cr;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        dd('No action found');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate(request(),[
            'name' => 'required|max:25|unique:projects,name,NULL,id,deleted_at,NULL',
            'description' => 'required'
        ]);
        
        $response = Project::Create($request->all());

        if ($response) 
            return response()->json(['success' => true, 'message' => 'Project created successfully !','response'=>$response]);
        else 
            return response()->json(['success' => false, 'message' => 'Something went wrong.. Please try again later !']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         return Project::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        dd('No action found');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate(request(),[
            'name' => 'required|max:25|unique:projects,name,'.$id.',id,deleted_at,NULL',
            'description' => 'required'
        ]);

        try {
            $project = Project::findOrFail($id);
            $project->update($request->all());
            return response()->json(['success' => true, 'message' => 'Project updated successfully !']);
        } catch(Exception $e) {
            return response()->json(['success' => false, 'message' => 'Something went wrong.. Please try again later !']);   
        }  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $project = Project::findOrFail($id);
            $project->delete();
            return response()->json(['success' => true, 'message' => 'Project deleted successfully !']);
        } catch(Exception $e) {
            return response()->json(['success' => false, 'message' => 'Something went wrong..Please try again later !']);    
        }
        
    }

    public function projects()
    {
        return Project::get();
    }
}
