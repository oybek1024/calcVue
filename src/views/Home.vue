<template>
  <div>
    <!-- PRE LOADER -->
     <!-- <section class="preloader">
          <div class="spinner">

               <span class="spinner-rotate"></span>

          </div>
     </section> -->


     <!-- MENU -->
     <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
          <div class="container">

               <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                    </button>

                    <!-- lOGO TEXT HERE -->
                    <a href="index.html" class="navbar-brand">Mukhiddinov</a>
               </div>

               <!-- MENU LINKS -->
               <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                         <li><a href="#home" class="smoothScroll">{{ $t('menu.home') }}</a></li>
                         <li><a href="#feature" class="smoothScroll">{{ $t('menu.about') }}</a></li>
                         <li><a href="#skills" class="smoothScroll">{{ $t('menu.skills') }}</a></li>
                         <li><a href="#about" class="smoothScroll">{{ $t('menu.team') }}</a></li>
                      <li><a href="#gallery" class="smoothScroll">{{ $t('menu.gallery') }}</a></li>
                          <li><a href="#pricing" class="smoothScroll">{{ $t('menu.portfolio') }}</a></li>
                         <li><a href="#contact" class="smoothScroll">{{ $t('menu.contact') }}</a></li>
                    </ul>
                    <!-- <ul class="nav navbar-nav navbar-right">
                         <li><a href="#">Connect me with mail - <span>mukhiddinov.oybek1024@gmail.com</span></a></li>
                    </ul> -->
               </div>

          </div>
     </section>


     <!-- FEATURE -->
     <section id="home" data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="container">
               <div class="row">

                    <div class="col-md-offset-3 col-md-6 col-sm-12">
                         <div class="home-info">
                               <h3>Mukhiddinov Oybek's personal blog</h3>
                              <h1>{{ $t('motivation') }}</h1>
                              <form action="" method="get" class="online-form">
                                   <input type="email" name="email" class="form-control" placeholder="Enter your email" required>
                                   <button type="submit" class="form-control">Get started</button>
                              </form>
                         </div>
                    </div>

               </div>
          </div>
     </section>


     <!-- FEATURE -->
     <section id="feature" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-12 col-sm-12">
                         <div  class="wow bounceInUp section-title" data-wow-duration="2s">
                              <h1>{{ $t('about.me') }}</h1>
                         </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                         <ul class="nav nav-tabs" role="tablist">
                              <li class="active"><a href="#tab01" aria-controls="tab01" role="tab" data-toggle="tab">{{ $t('about.main') }}</a></li>

                              <li><a href="#tab02" aria-controls="tab02" role="tab" data-toggle="tab">{{ $t('about.hobby') }}</a></li>

                              <li><a href="#tab03" aria-controls="tab03" role="tab" data-toggle="tab">{{ $t('about.study') }}</a></li>
                         </ul>

                         <div class="tab-content">
                              <div class="tab-pane active" id="tab01" role="tabpanel">
                                   <div class="tab-pane-item">
                                        <h2>{{ $t('about.biography') }}</h2>
                                        <p>{{ $t('about.my') }}</p>
                                   </div>
                                   <div class="tab-pane-item">
                                        <h2>{{ $t('about.experience') }}</h2>
                                        <p>{{ $t('about.experience-text') }}</p>
                                   </div>
                              </div>


                              <div class="tab-pane" id="tab02" role="tabpanel">
                                   <div class="tab-pane-item">
                                        <h2>{{ $t('about.hobby-main.cinema') }}</h2>
                                        <p>{{ $t('about.hobby-main.cinema-text') }}</p>
                                   </div>
                                   <div class="tab-pane-item">
                                        <h2>{{ $t('about.hobby-main.playgame') }}</h2>
                                        <p>{{ $t('about.hobby-main.playgame-text') }}</p>
                                   </div>
                              </div>

                              <div class="tab-pane" id="tab03" role="tabpanel">
                                   <div class="tab-pane-item">
                                        <h2>2015 - 2018</h2>
                                        <p>Bukhara region, Gijduvan district, Industrial and Transport Vocational College,  <strong>Car maintenance specialist</strong> </p>
                                   </div>
                                   <div class="tab-pane-item">
                                        <h2>Since 2019</h2>
                                        <p>Tashkent University of Information Technologies, Computer Engineer</p>
                                   </div>
                              </div>
                         </div>

                    </div>

                    <div class="col-md-6 col-sm-6">
                         <div class="feature-image">
                              <img src="images/feature-mockup.png" class="img-responsive" alt="Thin Laptop">
                         </div>
                    </div>

               </div>
          </div>
     </section>


    <!-- SKILLS -->
    <section id="skills" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row">

          <div class=" col-md-12 col-sm-12">
            <div class="section-title">
              <h1>{{ $t('skills.name') }}</h1>
            </div>
          </div>

          <div v-for="(item,i) in skills" :key="i" class="col-md-2 col-sm-4">
            <div class="skills">
              <img :src="item.image" width="96px" height="96px">
<!--              <div class="ten"></div>-->
              <div class="skill-head">{{ item.name }}</div>
            </div>
          </div>

        </div>
      </div>
    </section>


     <!-- TEAM -->
     <section id="about" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-offset-3 col-md-6 col-sm-12">
                         <div class="section-title">
                              <h1>Professional Team for you</h1>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb">
                              <img src="images/team-image1.jpg" class="img-responsive" alt="Andrew Orange">
                              <div class="team-info team-thumb-up">
                                   <h2>Andrew Orange</h2>
                                   <small>Art Director</small>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb">
                              <div class="team-info team-thumb-down">
                                   <h2>Catherine Soft</h2>
                                   <small>Senior Manager</small>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                              <img src="images/team-image2.jpg" class="img-responsive" alt="Catherine Soft">
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb">
                              <img src="images/team-image3.jpg" class="img-responsive" alt="Jack Wilson">
                              <div class="team-info team-thumb-up">
                                   <h2>Jack Wilson</h2>
                                   <small>CEO / Founder</small>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     </section>

    <!-- GALLERY -->
    <section id="gallery" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row">

          <div class=" col-md-12 col-sm-12">
            <div class="section-title">
              <h1>{{ $t('menu.gallery') }}</h1>
            </div>
          </div>

          <div v-for="(item,i) in images" :key="i" class="col-md-3 col-sm-4">
              <div class="gallery">
                <div class="show" @click="imageShow(i)">
                  <h3 style="color: white">View</h3>
<!--                  <img class="showimg" src="../assets/search.png">-->
                </div>
                <img class="img" :src="item">
              </div>
          </div>

        </div>
      </div>
    </section>



    <!-- PRICING -->
    <section id="pricing" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row">

          <div class=" col-md-12 col-sm-12">
            <div class="section-title">
              <h1>{{ $t('menu.gallery') }}</h1>
            </div>
          </div>

          <div v-for="(item,i) in images" :key="i" class="col-md-3 col-sm-4">
            <div class="gallery">
              <div class="show" @click="imageShow(i)">
                <h3 style="color: white">View</h3>
                <!--                  <img class="showimg" src="../assets/search.png">-->
              </div>
              <img class="img" :src="item">
            </div>
          </div>

        </div>
      </div>
    </section>


     <!-- CONTACT -->
     <section id="contact" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-offset-1 col-md-10 col-sm-12">
                         <form id="contact-form" role="form" action="" method="post">
                              <div class="section-title">
                                   <h1>Say hello to us</h1>
                              </div>

                              <div class="col-md-4 col-sm-4">
                                   <input type="text" class="form-control" placeholder="Full name" name="name" required>
                              </div>
                              <div class="col-md-4 col-sm-4">
                                   <input type="email" class="form-control" placeholder="Email address" name="email" required>
                              </div>
                              <div class="col-md-4 col-sm-4">
                                   <input type="submit" class="form-control" name="send message" value="Send Message">
                              </div>
                              <div class="col-md-12 col-sm-12">
                                   <textarea class="form-control" rows="8" placeholder="Your message" name="message" required></textarea>
                              </div>
                         </form>
                    </div>

               </div>
          </div>
     </section>


     <!-- FOOTER -->
     <footer id="footer" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="copyright-text col-md-12 col-sm-12">
                         <div class="col-md-6 col-sm-6">
                              <p>Copyright &copy; 2018 Company Name - Design: Tooplate</p>
                         </div>

                         <div class="col-md-6 col-sm-6">
                              <ul class="social-icon">
                                   <li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                                   <li><a href="#" class="fa fa-twitter"></a></li>
                                   <li><a href="#" class="fa fa-instagram"></a></li>
                              </ul>
                         </div>
                    </div>

               </div>
          </div>
     </footer>

<!--    IMAGE_VIEW-->
    <image-lightbox :media="lightbox" ref="imageView" :showLightBox="false" :startAt="startAt" :showCaption="true"></image-lightbox>
  </div>
</template>

<script>
import html from '../assets/html-document.svg'
import css from '../assets/css-document.svg'
import sass from '../assets/sass.png'
import bootstrap from '../assets/bootstrap.svg'
import js from '../assets/js-file-format-symbol.svg'
import node from '../assets/nodejs.png'
import vue from '../assets/vuejs.svg'
import vuex from '../assets/vuex.svg'
import vuetify from '../assets/vuetify.svg'
import ant from '../assets/ant.png'
import rest from '../assets/rest.png'
import mongo from '../assets/mongodb.png'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import image1 from '../gallery/image1.jpg'
import image2 from '../gallery/image2.jpg'
import image3 from '../gallery/image3.jpg'
import image4 from '../gallery/image4.jpg'
import image5 from '../gallery/image5.jpg'
import image6 from '../gallery/image6.jpg'
import image7 from '../gallery/image7.jpg'
import image8 from '../gallery/image8.jpg'
import image9 from '../gallery/image9.jpg'
import image10 from '../gallery/image10.jpg'
import image11 from '../gallery/image11.jpg'
import image12 from '../gallery/image12.jpg'
import image13 from '../gallery/image13.jpg'
import image14 from '../gallery/image14.jpg'
import image15 from '../gallery/image15.jpg'
import image16 from '../gallery/image16.jpg'
import image17 from '../gallery/image17.jpg'
import image18 from '../gallery/image18.jpg'
import image19 from '../gallery/image19.jpg'
import image20 from '../gallery/image20.jpg'
// import { UAnimateContainer, UAnimate } from "vue-wow"
export default {
  // components: {
  //   UAnimateContainer,
  //   UAnimate
  // },
  data () {
    return {
      skills: [
        { name: 'HTML 5', image: html },
        { name: 'CSS 3', image: css },
        { name: 'Scss, Sass', image: sass },
        { name: 'Bootstrap', image: bootstrap },
        { name: 'JavaScript', image: js },
        { name: 'Node Js', image: node },
        { name: 'Vue', image: vue },
        { name: 'Vuex', image: vuex },
        { name: 'Vuetify', image: vuetify },
        { name: 'Ant Design Vue', image: ant },
        { name: 'Rest API', image: rest },
        { name: 'Mongo DB', image: mongo },
      ],
      startAt: 0,
      images: [
          image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,
          image12,image13,image14,image15,image16,image17,image18,image19,image20
      ]
    }
  },
  methods: {
    imageShow(i) {
      console.log('Image')
      this.startAt = i
      this.$refs.imageView.showImage(i)
    }
  },
  computed: {
    lightbox () {
      return this.images.map((e, i) => {
        return {
          thumb: e,
          src: e,
          caption: 'image' + i
        }
      })
    }
  }
}
</script>
<style>
.owl-dot {
  outline: none;
}
ul {
  cursor: pointer;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.lang {
  display: flex;
  margin-top: 3px;
}
.lang li {
  border-radius: 50%;
  list-style-type: none;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lang li:hover {
  box-shadow: 0px 0px 10px rgb(107, 104, 104);
}
.lang_active {
  box-shadow: 0px 0px 10px rgb(165, 159, 159);
  border-radius: 50%;
}
.makPoint {
  /*background: url("../public/images/makPointBack.jpg");*/
  background-size: cover;
  padding-bottom: 100px;
  height: 670px;
}
.lang_select{
  background: #eeecec;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  padding: 5px;
  outline: none;
  margin-top: 5px;
  width: 120px;
  cursor: pointer;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 15px;
  transition: all ease-in-out 0.4s;
}
</style>
