<template>
  <div id="demo-basic-card">
    <div class="vx-row">
      <div class="vx-col-12 w-full mb-base">
          <vx-card class="overflow-hidden">
              <template slot="no-body">
                  <video-player ref="player" class="media-video-player card-video" :options="playerOptions" />
              </template>
          </vx-card>
      </div>
      <div class="vx-col w-full mb-base">
          <vx-card :title="($t('Feedback', 'ru', { Feedback: 'Contact Form' }))">
              <vs-input :placeholder="($t('Name', 'ru', { Name: 'Name' }))" class="w-full mb-4" v-model="name" />
              <vs-input :placeholder="($t('Email', 'ru', { Email: 'Email' }))" type="email" class="w-full mb-4" v-model="email" />
              <vs-textarea :label="($t('Message', 'ru', { Message: 'Message' }))" v-model="msg" />
              <vs-button class="mr-4" @click="name = email = msg =''">{{$t('Submit', 'ru', { Submit: 'Submit' })}}</vs-button>
              <vs-button type="border" color="warning" @click="name = email = msg =''" class="mt-3">{{$t('Cancel', 'ru', { Cancel: 'Cancel' })}}</vs-button>
          </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import { videoPlayer }     from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  components: {
    videoPlayer
  }, 
  data () {
    return {
      playerOptions: {},
      name: '',
      email: '',
      msg: ''
    }
  },
  created () {
    // Player Options
    this.$http.get('/api/card/card-basic/player-option')
      .then((response) => { this.playerOptions = response.data })
      .catch((error)   => { console.log(error) })
  }
}
</script>


<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    .card-video {
        .video-js {
            height: 370px;
        }
    }
}
</style>