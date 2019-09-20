<template>
  <div class="header_bg">
      <div class="header">
        <div class="logo">
          <a href="/"><img src="../assets/top-logo-en.png" alt=" " /></a>
        </div>
        <nav class="navbar-default">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse">
            <ul class="navbar-nav">
              <li class="act" v-for="item in navdata"><a><p class="c-title">{{item.cTitle}}</p><p class="e-title">{{item.eTitle}}</p></a></li>
              <li><a>CN</a></li>
            </ul>
          </div>
        </nav>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    components: {},
    data() {
      return {
        navdata:[
          {"cTitle":"首页","eTitle":"HOME"},
          {"cTitle":"实验室","eTitle":"Laboratories"},
          {"cTitle":"合作生态","eTitle":"Collaboration"},
          {"cTitle":"新闻动态","eTitle":"Events"},
          {"cTitle":"加入我们","eTitle":"Careers"},
          {"cTitle":"关于我们","eTitle":"About Us"}
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .header_bg {
    background:#fff;
    position: relative;

    .header{
      width: 1200px;
      height: 144px;
      min-width: 1200px;
      margin:0 auto;
      background: url(//g.alicdn.com/atastatic/s/damo/css/img/top-background-img.png) center bottom no-repeat;
      background-size: 250px;
      transition: all .3s;

      .logo{
        position: absolute;
        min-width: 1200px;
        left: 0%;
        right:0%;
        z-index: 999;
        text-align: center;
        width: 200px;
        height: 100%;
        margin: 0 auto;

        a{
          margin-left: -72px;
          display:block;
          height:100%;
          padding-top: 36px;
          img {
            width: 148px;
            height: 72px;
          }
        }
      }

      @media screen and (max-width:768px){
        min-width: 0;
        width:100%;
        height: 78px;
        background: url(//g.alicdn.com/atastatic/s/damo/css/img/top-background-img.png) left bottom no-repeat;
        background-size: 150px;

        .logo {
          min-width: 0;
          width:100%;
          margin: 0;
          text-align: left;
          padding:20px;

          a {
            margin-left: 0;
            background:url(../assets/top-logo-en.png)no-repeat;
            background-size: 100px;

            img {
              display: none;
            }
          }
        }
      }

      .navbar-default {
        display:block;
        height:100%;
        background: none;
        border: none;
        margin-bottom: 0;
        padding: 0;

        .navbar-header {
          display: none;
          right:0px;
          float:right;

          .navbar-toggle {
            padding: 5px 10px 10px 10px;
            margin-top: 20px;
            margin-right: 7px;
            background-color: transparent;
            background-image: none;
            border: 1px solid #888888;
            border-radius: 4px;

            .icon-bar {
              display: block;
              width: 22px;
              height: 2px;
              margin-top: 4px;
              border-radius: 1px;
              background-color: #888;

            }
          }

          @media screen and (max-width:768px){
            display:block;
          }
        }
		
       .navbar-collapse {
         display: block;
         height:100%;

         @media screen and (max-width:768px){
            display:none;
          }

         .navbar-nav {
          height:100%;
          width: 100%;

         li {
            float:left;
            display: table;
            list-style: none;
            width: 1/9 * 100%;
            height:100%;

            a{
              font-size: 16px;
              color: #051027;
              letter-spacing: 0;
              line-height: 20px;
              text-align: center;
              display: table-cell;
              vertical-align: middle;

              .c-title {
                font-family: Bulter,QingKe,sans-serif,SimSun;
                margin-bottom: 10px;
              }

              .e-title {
                line-height: 11px;
                font-size: 10px;
                color: #cacdd2;
                letter-spacing: .83px;
                font-family: Roboto;
                font-weight: 700;
                text-transform: uppercase;
              }
            }

          &:nth-child(1) {
             margin-left: 1/18 * 100%;
           }

          &:nth-child(4) {
             margin-left: 3/18 * 100%;
           }
         }
        }
      }
    }
   }
  }
</style>
