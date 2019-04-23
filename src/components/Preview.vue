
 <template>
      <div class="preview">
        <div class="row">
          <div class="col-sm-6">
            <!--  this part will contain the product info -->
            <h1> {{ product_name }} </h1>
            <div>
              <p> {{ product_desc }} </p>
              <p> Price : ${{ product_price }} </p>
            </div>
          </div>
          <div class="col-sm-6">
            <!--  this part will contain the images -->
            <div id="demo" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators">
                <template v-for="single_media in media">
                  <template v-if="single_media.id == 0">
                    <li data-target="#demo" v-bind:data-slide-to="single_media.id" class="active"></li>
                  </template>
                  <template v-else>
                    <li data-target="#demo" v-bind:data-slide-to="single_media.id"></li>
                  </template>
                </template>
                <!-- <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="2"></li> -->
              </ul>
              <!-- The slideshow -->
              <div class="carousel-inner">
                <template v-for="single_media in media">
                  <template v-if="single_media.id == 0">
                    <div class="carousel-item active">
                      <template v-if="single_media.type == 'image'">
                        <img class="img-responsive single-image" v-bind:src="single_media.url"/>
                      </template>
                      <template v-else>
                       <video
                        id="video-player"
                        controls
                        class="single-image cld-video-player cld-video-player-skin-dark"
                        v-bind:data-cld-source="single_media.url"
                        >
                        </video> 
                      </template>
                    </div>
                  </template>
                  <template v-else>
                    <div class="carousel-item">
                      <template v-if="single_media.type == 'image'">
                        <img class="img-responsive single-image" v-bind:src="single_media.url"/>
                      </template>
                      <template v-else>
                        <video
                        id="video-player"
                        controls
                        class="single-image cld-video-player cld-video-player-skin-dark"
                        v-bind:data-cld-source="single_media.url"
                        >
                        </video>
                      </template>
                    </div>
                  </template>
                </template>
              </div>
              <!-- Left and right controls -->
              <a class="carobbusel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next"  v-on:click="initializePlayer()">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>  
          </div>
        </div>

      </div>
    </template>



<script>
    import axios from 'axios'

    export default {
      name: 'Preview',
      data () {
        return {
          media :[],
          product_name : "",
          product_desc : "",
          product_price : ""
        }
      },
      mounted : function(){
        // now we get all the related infomation for the particular product id
        axios.get(`http://localhost:3128/getProductInfo/${this.$route.params.id}`)
        .then( res => {
          this.media = res.data.media;
          this.product_name = res.data.product_name;
          this.product_desc = res.data.product_desc;
          this.product_price = res.data.product_price;

        })
      },
      methods : {
        initializePlayer : function(){
          console.log('here')
          var cld = cloudinary.Cloudinary.new({ cloud_name: "og-tech", secure: true});
          var demoplayer = cld.videoPlayer('video-player');
        }
      }
    }

</script>

<style scoped>
      h1, h2 {
        font-weight: normal;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        display: inline-block;
        margin: 0 10px;
      }
      a {
        color: #42b983;
      }
      .carousel-inner{
        height : 500px;
      }
      .carousel-item{
        height : 100%;
      }
      .single-image{
        width : 100%;
        height: 100%;
        object-fit : fill;
      }
      #demo{
        margin-left: 30px;
        margin-right: 30px;
      }
    </style>