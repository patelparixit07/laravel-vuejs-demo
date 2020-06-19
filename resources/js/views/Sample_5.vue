<template>
    <div class="container">
        <div  class="row">
            <div class="col-md-6">
                <h4>Component Example (Tabs)</h4>
            </div>
            <div class="col-md-6">
            	<div class="component-block">
            		<label>Parent Component : Tabs</label>
            		<label>Child Component : Tab</label>
            	</div>
            </div>
        </div>
        <div  class="row">
        	<div class="col-md-12">
        		<tabs>
	                <tab name="Tab 1" :selected=true>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed est scelerisque enim tincidunt interdum. Etiam aliquet lacus vitae nunc elementum elementum a in ligula. Nullam ornare metus lobortis scelerisque commodo. Maecenas varius molestie varius. Sed lectus mi, imperdiet vel venenatis id, cursus non lacus. Ut mattis aliquet rhoncus. Mauris semper nec lacus nec efficitur.</p>

						<p>Duis ac interdum ligula. Vestibulum id egestas ante, a mattis orci. Praesent massa turpis, facilisis nec nulla eu, euismod pretium quam. Vivamus semper dignissim ex, eget pellentesque lorem scelerisque vitae. Vivamus eget lorem eget justo porta interdum. Suspendisse consequat, lacus sed dignissim maximus, augue risus luctus ipsum, a molestie elit purus eget urna. Sed interdum mi sed enim semper, sed fringilla urna pharetra. Ut lobortis aliquam mauris eget tempor. Nam id dui gravida, cursus ligula vitae, mattis est. Sed quis nisi dignissim, rutrum ex non, porta velit. Donec non arcu vitae odio interdum congue.</p>

						<p>Sed venenatis bibendum semper. Sed sit amet fringilla sem. Curabitur elementum nisi quis ex sodales, at iaculis diam faucibus. Maecenas maximus ex blandit tristique tempor. Etiam eget felis turpis. Curabitur ac dictum dui, vel vestibulum leo. Morbi gravida tempor orci. Donec quam dui, convallis sed erat ut, vehicula ornare libero. Sed id aliquam felis. Sed ac sollicitudin mauris. Duis posuere luctus tortor et malesuada. In maximus metus leo, eleifend consectetur nisl rutrum fermentum. Sed vitae consequat felis, sed placerat urna. Vivamus mattis ipsum ac dolor sodales laoreet. Nunc et tortor ac nunc ultricies egestas sed sit amet elit. Ut porta finibus turpis, ac eleifend erat.</p>
	                </tab>
	                <tab name="Tab 2">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis eleifend arcu. Sed aliquam, erat sit amet imperdiet porta, diam lacus feugiat libero, non viverra tortor lorem non odio. Quisque eu nulla at nisl tincidunt vulputate et et dui. Aenean vitae porta nisi. Donec sodales vel magna vitae convallis. In leo magna, sollicitudin non quam vitae, porta semper leo. Curabitur facilisis imperdiet enim quis consequat. Nam vitae metus pellentesque, pharetra risus et, pharetra lacus. Sed et pharetra ex. Sed ornare augue accumsan massa placerat, faucibus convallis dui molestie. Vestibulum laoreet dolor sed elit tempus, ut lacinia arcu sodales. Duis ullamcorper, sem eu tincidunt dapibus, massa nunc ullamcorper ante, id fringilla nisi est a risus. Nulla nisl nibh, rhoncus vel enim nec, consectetur ultrices nisl. Fusce justo erat, aliquam at aliquam nec, blandit in mauris. Fusce tincidunt pulvinar auctor.</p>

						<p>Integer et bibendum urna, sit amet vehicula ligula. Nam tristique lobortis ante tincidunt dapibus. Phasellus sit amet massa est. Integer nisi neque, sagittis a euismod blandit, mattis et metus. Cras congue diam est, id aliquam mi mattis quis. Vestibulum lectus sapien, facilisis pharetra ante suscipit, ornare tristique libero. Aliquam semper lacus a tempor porttitor. Duis iaculis viverra eros, quis ornare ligula. Aenean ut quam ex. Cras dictum lacus ac iaculis sagittis. Morbi varius nisi in justo tempor, id tincidunt mi interdum. Suspendisse pellentesque, dolor vitae pharetra fringilla, orci neque volutpat tellus, sed sagittis erat nulla sit amet elit. Nam ac lectus elementum, pulvinar leo ut, congue purus. Aliquam finibus mi at mollis dignissim. Suspendisse potenti.</p>

						<p>Ut rutrum tincidunt magna, in lobortis purus suscipit ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, lorem eu lacinia tempor, tortor odio vehicula nunc, a ultrices ante dolor at leo. Integer pharetra consequat quam, sed malesuada mi hendrerit eget. Nullam posuere nec erat eget faucibus. Morbi egestas interdum felis non tincidunt. Cras vitae placerat enim. Nunc bibendum, arcu id auctor pharetra, orci velit vestibulum risus, sit amet ullamcorper augue libero ornare eros. Pellentesque dapibus porta magna et tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus consequat luctus ipsum eget venenatis. Vestibulum efficitur nec diam eget semper. Nullam rhoncus diam non ipsum fringilla, et ullamcorper purus facilisis. Sed sodales orci efficitur dolor mollis pretium. Suspendisse dolor lectus, varius vitae elementum vel, luctus nec magna. Mauris eu nulla a ex rhoncus vulputate.</p>
	                </tab>
	                <tab name="Tab 3">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas ante at interdum dapibus. Morbi quis erat varius, aliquet ligula quis, volutpat dolor. Donec eu sem sed lacus scelerisque pulvinar eu porttitor mauris. Fusce bibendum ligula sed lectus convallis aliquet. Donec sit amet varius nulla. In interdum tempus ultrices. Duis et suscipit urna. Morbi maximus tristique posuere. Duis aliquet magna arcu, vel aliquam arcu euismod vel. Aenean orci diam, pulvinar varius leo eu, vestibulum efficitur tortor. Vivamus vel ornare tortor. Morbi sodales posuere condimentum. Curabitur gravida sapien eget vulputate consequat. Donec congue quam non ex porttitor accumsan. Curabitur laoreet mattis felis eu tempor.</p>

						<p>Duis ante lectus, commodo in odio vel, imperdiet finibus metus. Sed eget arcu vel nisl mollis pulvinar. Etiam ut dignissim nisl. Nam consequat rutrum tortor ut semper. Maecenas tempor nibh vestibulum arcu convallis consectetur. Sed ultrices posuere posuere. In vel lorem suscipit, ullamcorper lorem vel, congue libero. Duis imperdiet odio nulla, et mollis est fringilla eu. Aenean fermentum massa sed semper gravida. In ultricies ipsum ut nulla suscipit facilisis. Maecenas vel dui dui. Donec laoreet gravida nulla a tempus. Maecenas porttitor consectetur finibus. Duis neque tellus, lacinia vehicula aliquam id, facilisis non ante.</p>

						<p>In ac nulla eu metus ultrices scelerisque. Sed a erat vitae justo commodo blandit a nec nunc. Vivamus euismod massa in lectus sagittis ultricies. Sed molestie finibus metus at aliquam. Quisque ut viverra diam. Nam massa lectus, lobortis in sapien non, sollicitudin maximus nisi. Ut elit dolor, malesuada vel mollis et, mollis sodales urna. Duis tincidunt sem massa, sit amet tristique orci consectetur ut. Ut eget purus finibus, porta sem id, lobortis leo.</p>
	                </tab>
	            </tabs>
        	</div>        	  
        </div>
    </div>
</template>

<script>
    import Tabs from '../components/Tabs';
    import Tab from '../components/Tab';

	export default {
		components: { Tabs, Tab }
	}
</script>