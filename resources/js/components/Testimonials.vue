<template>
	<div class="col-md-12 border border-dark p-5">
		<div class="row">
			<div class="col-md-8 border-right border-dark">
				<div class="row">
					<div class="col-md-2 pt-4" v-for="testimonial in testimonials">
						<img :src="testimonial.image" :class="(featuredTestimonial == testimonial) ? 'rounded-circle border-5 border-dark' : 'rounded-circle border border-dark testimonial-img'" @mouseover="updateTestimonial(testimonial)" @mouseout="clearTimer">	
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="text-center">
					<p><img :src="featuredTestimonial.image" class="rounded-circle border border-dark">	</p>
					<p v-html="featuredTestimonial.text"></p>				
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				testimonials: [],
				featuredTestimonial: {},
				timer: null
			}
		},
		mounted() {
			let sampleTestimonials = [];
			let sample_1 = {'image': 'https://placeimg.com/80/80/people?1', 'text': '\"After using Services my business skyrocketed! Services has really helped our business.\"<i>- Darrel W.</i>'};
			let sample_2 = {'image': 'https://placeimg.com/80/80/people?2', 'text': '\"Services is worth much more than I paid. It\'s really wonderful. Services is both attractive and highly adaptable.\"<i>- Carlton S.</i>'};
			let sample_3 = {'image': 'https://placeimg.com/80/80/people?3', 'text': '\"Services has got everything I need. Wow what great service, I love it! Definitely worth the investment.\"<i>- Nels Z.</i>'};
			let sample_4 = {'image': 'https://placeimg.com/80/80/people?4', 'text': '"Services has completely surpassed our expectations. I don\'t always clop, but when I do, it\'s because of Services. I don\'t know what else to say. It\'s just amazing. "<i>- Natalya Z.</i>'};
			let sample_5 = {'image': 'https://placeimg.com/80/80/people?5', 'text': '"It\'s the perfect solution for our business. Services has got everything I need. I am so pleased with this product."<i>- Mateo U.</i>'};
			let sample_6 = {'image': 'https://placeimg.com/80/80/people?6', 'text': '"No matter where you go, Services is the coolest, most happening thing around! I will recommend you to my colleagues."<i>- Annabell M.</i>'};
			let sample_7 = {'image': 'https://placeimg.com/80/80/people?7', 'text': '"I didn\'t even need training."<i>- Lynnelle B.</i>'};
			let sample_8 = {'image': 'https://placeimg.com/80/80/people?8', 'text': '"I love your system. Thanks for the great service. Absolutely wonderful! I wish I would have thought of it first."<i>- Gideon T.</i>'};
			let sample_9 = {'image': 'https://placeimg.com/80/80/people?9', 'text': '"I use Services often. I love Services. It\'s the perfect solution for our business. Services has completely surpassed our expectations."<i>- Ace I.</i>'};
			
			sampleTestimonials.push(sample_1,sample_2,sample_3,sample_4,sample_5,sample_6,sample_7,sample_8,sample_9);

			this.testimonials = sampleTestimonials;
			this.featuredTestimonial = this.testimonials[0];
		},
		methods: {
			updateTestimonial(testimonial) {
				let self = this;
				this.timer = setTimeout(function(){
					self.featuredTestimonial = testimonial;
				},250);
				
			},
			clearTimer() {
				clearTimeout(this.timer);
			}
		}
	}
</script>