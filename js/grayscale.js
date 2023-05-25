/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

body {
    width: 100%;
    height: 100%;
    font-family: Lora,"Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #fff;
    background-color: #000;
}

html {
    width: 100%;
    height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 35px;
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
}

p {
    margin: 0 0 25px;
    font-size: 18px;
    line-height: 1.5;
}

@media(min-width:768px) {
    p {
        margin: 0 0 35px;
        font-size: 20px;
        line-height: 1.6;
    }
}

a {
    color: #42dca3;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

a:hover,
a:focus {
    text-decoration: none;
    color: #1d9b6c;
}

.navbar-custom {
    margin-bottom: 0;
    border-bottom: 1px solid rgba(255,255,255,.3);
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    background-color: #000;
}

.navbar-custom .navbar-brand {
    font-weight: 700;
}

.navbar-custom .navbar-brand:focus {
    outline: 0;
}

.navbar-custom .navbar-brand .navbar-toggle {
    padding: 4px 6px;
    font-size: 16px;
    color: #fff;
}

.navbar-custom .navbar-brand .navbar-toggle:focus,
.navbar-custom .navbar-brand .navbar-toggle:active {
    outline: 0;
}

.navbar-custom a {
    color: #fff;
}

.navbar-custom .nav li a {
    -webkit-transition: background .3s ease-in-out;
    -moz-transition: background .3s ease-in-out;
    transition: background .3s ease-in-out;
}

.navbar-custom .nav li a:hover {
    outline: 0;
    color: rgba(255,255,255,.8);
    background-color: transparent;
}

.navbar-custom .nav li a:focus,
.navbar-custom .nav li a:active {
    outline: 0;
    background-color: transparent;
}

.navbar-custom .nav li.active {
    outline: 0;
}

.navbar-custom .nav li.active a {
    background-color: rgba(255,255,255,.3);
}

.navbar-custom .nav li.active a:hover {
    color: #fff;
}

.light {
	font-size: 36px;
    font-weight: 200;
}

@media(min-width:768px) {
    .navbar-custom {
        padding: 20px 0;
        border-bottom: 0;
        letter-spacing: 1px;
        background: 0 0;
        -webkit-transition: background .5s ease-in-out,padding .5s ease-in-out;
        -moz-transition: background .5s ease-in-out,padding .5s ease-in-out;
        transition: background .5s ease-in-out,padding .5s ease-in-out;
    }

    .navbar-custom.top-nav-collapse {
        padding: 0;
        border-bottom: 1px solid rgba(255,255,255,.3);
        background: #000;
    }
}

.intro {
    display: table;
    width: 100%;
    height: auto;
    padding: 100px 0;
    text-align: center;
    color: #fff;
    background: url(../img/intro-bg.jpg) no-repeat bottom center scroll;
    background-color: #000;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
}

/*!
 * SLIDESHOW START
 */

.slideshow,
.slideshow:after {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 0;
}
.slideshow:after {
    content: '';
    background: transparent url(../images/pattern.png) repeat top left;
}
.slideshow li span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0;
    z-index: 0;
	-webkit-backface-visibility: hidden;
    -webkit-animation: imageAnimation 36s linear infinite 0s;
    -moz-animation: imageAnimation 36s linear infinite 0s;
    -o-animation: imageAnimation 36s linear infinite 0s;
    -ms-animation: imageAnimation 36s linear infinite 0s;
    animation: imageAnimation 36s linear infinite 0s;
}
.slideshow li div {
    z-index: 1000;
    position: absolute;
    bottom: 10px;
    left: 0px;
    width: 100%;
    text-align: right;
    opacity: 0;
    -webkit-animation: titleAnimation 36s linear infinite 0s;
    -moz-animation: titleAnimation 36s linear infinite 0s;
    -o-animation: titleAnimation 36s linear infinite 0s;
    -ms-animation: titleAnimation 36s linear infinite 0s;
    animation: titleAnimation 36s linear infinite 0s;
}
.slideshow li div h3 {
    font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
    font-size: 160px;
    padding: 0 30px;
    line-height: 120px;
    color: rgba(169,3,41, 0.8);
}
.slideshow li:nth-child(1) span { background-image: url(../img/6.jpg) }
.slideshow li:nth-child(2) span {
    background-image: url(../img/5.jpg);
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    -o-animation-delay: 6s;
    -ms-animation-delay: 6s;
    animation-delay: 6s;
}
.slideshow li:nth-child(3) span {
    background-image: url(../img/4.jpg);
    -webkit-animation-delay: 12s;
    -moz-animation-delay: 12s;
    -o-animation-delay: 12s;
    -ms-animation-delay: 12s;
    animation-delay: 12s;
}
.slideshow li:nth-child(4) span {
    background-image: url(../img/3.jpg);
    -webkit-animation-delay: 18s;
    -moz-animation-delay: 18s;
    -o-animation-delay: 18s;
    -ms-animation-delay: 18s;
    animation-delay: 18s;
}
.slideshow li:nth-child(5) span {
    background-image: url(../img/2.jpg);
    -webkit-animation-delay: 24s;
    -moz-animation-delay: 24s;
    -o-animation-delay: 24s;
    -ms-animation-delay: 24s;
    animation-delay: 24s;
}
.slideshow li:nth-child(6) span {
    background-image: url(../img/1.jpg);
    -webkit-animation-delay: 30s;
    -moz-animation-delay: 30s;
    -o-animation-delay: 30s;
    -ms-animation-delay: 30s;
    animation-delay: 30s;
}
.slideshow li:nth-child(2) div {
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    -o-animation-delay: 6s;
    -ms-animation-delay: 6s;
    animation-delay: 6s;
}
.slideshow li:nth-child(3) div {
    -webkit-animation-delay: 12s;
    -moz-animation-delay: 12s;
    -o-animation-delay: 12s;
    -ms-animation-delay: 12s;
    animation-delay: 12s;
}
.slideshow li:nth-child(4) div {
    -webkit-animation-delay: 18s;
    -moz-animation-delay: 18s;
    -o-animation-delay: 18s;
    -ms-animation-delay: 18s;
    animation-delay: 18s;
}
.slideshow li:nth-child(5) div {
    -webkit-animation-delay: 24s;
    -moz-animation-delay: 24s;
    -o-animation-delay: 24s;
    -ms-animation-delay: 24s;
    animation-delay: 24s;
}
.slideshow li:nth-child(6) div {
    -webkit-animation-delay: 30s;
    -moz-animation-delay: 30s;
    -o-animation-delay: 30s;
    -ms-animation-delay: 30s;
    animation-delay: 30s;
}
@-webkit-keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    -webkit-animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    -webkit-transform: scale(1.05);
	    -webkit-animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    -webkit-transform: scale(1.1) rotate(3deg);
	}
	25% {
	    opacity: 0;
	    -webkit-transform: scale(1.1) rotate(3deg);
	}
	100% { opacity: 0 }
}
@-moz-keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    -moz-animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    -moz-transform: scale(1.05);
	    -moz-animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    -moz-transform: scale(1.1) rotate(3deg);
	}
	25% {
	    opacity: 0;
	    -moz-transform: scale(1.1) rotate(3deg);
	}
	100% { opacity: 0 }
}
@-o-keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    -o-animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    -o-transform: scale(1.05);
	    -o-animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    -o-transform: scale(1.1) rotate(3deg);
	}
	25% {
	    opacity: 0;
	    -o-transform: scale(1.1) rotate(3deg);
	}
	100% { opacity: 0 }
}
@-ms-keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    -ms-animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    -ms-transform: scale(1.05);
	    -ms-animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    -ms-transform: scale(1.1) rotate(3deg);
	}
	25% {
	    opacity: 0;
	    -ms-transform: scale(1.1) rotate(3deg);
	}
	100% { opacity: 0 }
}
@keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    transform: scale(1.05);
	    animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    transform: scale(1.1) rotate(3deg);
	}
	25% {
	    opacity: 0;
	    transform: scale(1.1) rotate(3deg);
	}
	100% { opacity: 0 }
}
@-webkit-keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    -webkit-transform: translateX(200px);
	}
	8% {
	    opacity: 1;
	    -webkit-transform: translateX(0px);
	}
	17% {
	    opacity: 1;
	    -webkit-transform: translateX(0px);
	}
	19% {
	    opacity: 0;
	    -webkit-transform: translateX(-400px);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
@-moz-keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    -moz-transform: translateX(200px);
	}
	8% {
	    opacity: 1;
	    -moz-transform: translateX(0px);
	}
	17% {
	    opacity: 1;
	    -moz-transform: translateX(0px);
	}
	19% {
	    opacity: 0;
	    -moz-transform: translateX(-400px);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
@-o-keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    -o-transform: translateX(200px);
	}
	8% {
	    opacity: 1;
	    -o-transform: translateX(0px);
	}
	17% {
	    opacity: 1;
	    -o-transform: translateX(0px);
	}
	19% {
	    opacity: 0;
	    -o-transform: translateX(-400px);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
@-ms-keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    -ms-transform: translateX(200px);
	}
	8% {
	    opacity: 1;
	    -ms-transform: translateX(0px);
	}
	17% {
	    opacity: 1;
	    -ms-transform: translateX(0px);
	}
	19% {
	    opacity: 0;
	    -ms-transform: translateX(-400px);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
@keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    transform: translateX(200px);
	}
	8% {
	    opacity: 1;
	    transform: translateX(0px);
	}
	17% {
	    opacity: 1;
	    transform: translateX(0px);
	}
	19% {
	    opacity: 0;
	    transform: translateX(-400px);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
/* Show at least something when animations not supported */
.no-cssanimations .slideshow li span{
	opacity: 1;
}
@media screen and (max-width: 1140px) { 
	.slideshow li div h3 { font-size: 100px }
}
@media screen and (max-width: 600px) { 
	.slideshow li div h3 { font-size: 50px }
}

/*!
 * SLIDESHOW END
 */


.intro .intro-body {
    display: table-cell;
    vertical-align: middle;
}

.intro .intro-body .brand-heading {
    font-size: 40px;
}

.intro .intro-body .intro-text {
    font-size: 18px;
}

@media(min-width:768px) {
    .intro {
        height: 100%;
        padding: 0;
    }

    .intro .intro-body .brand-heading {
        font-size: 100px;
    }

    .intro .intro-body .intro-text {
        font-size: 26px;
    }
}

.btn-circle {
    width: 70px;
    height: 70px;
    margin-top: 15px;
    padding: 7px 16px;
    border: 2px solid #fff;
    border-radius: 100%!important;
    font-size: 40px;
    color: #fff;
    background: 0 0;
    -webkit-transition: background .3s ease-in-out;
    -moz-transition: background .3s ease-in-out;
    transition: background .3s ease-in-out;
}

.btn-circle:hover,
.btn-circle:focus {
    outline: 0;
    color: #fff;
    background: rgba(255,255,255,.1);
}

.btn-circle i.animated {
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
}

.btn-circle:hover i.animated {
    -webkit-animation-name: pulse;
    -moz-animation-name: pulse;
    -webkit-animation-duration: 1.5s;
    -moz-animation-duration: 1.5s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
}

@-webkit-keyframes pulse {    
    0 {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    50% {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@-moz-keyframes pulse {    
    0 {
        -moz-transform: scale(1);
        transform: scale(1);
    }

    50% {
        -moz-transform: scale(1.2);
        transform: scale(1.2);
    }

    100% {
        -moz-transform: scale(1);
        transform: scale(1);
    }
}

.content-section {
    padding-top: 100px;
}

.download-section {
    width: 100%;
    padding: 50px 0;
    color: #fff;
    background: url(../img/downloads-bg.jpg) no-repeat center center scroll;
    background-color: #000;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
}

#map {
    width: 100%;
    height: 200px;
    margin-top: 100px;
}

@media(min-width:767px) {
    .content-section {
        padding-top: 250px;
    }

    .download-section {
        padding: 100px 0;
    }

    #map {
        height: 400px;
        margin-top: 250px;
    }
}

.btn {
    border-radius: 0;
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 400;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}

.btn-default {
    border: 1px solid #42dca3;
    color: #42dca3;
    background-color: transparent;
}

.btn-default:hover,
.btn-default:focus {
    border: 1px solid #42dca3;
    outline: 0;
    color: #000;
    background-color: #42dca3;
}

ul.banner-social-buttons {
    margin-top: 0;
}

@media(max-width:1199px) {
    ul.banner-social-buttons {
        margin-top: 15px;
    }
}

@media(max-width:767px) {
    ul.banner-social-buttons li {
        display: block;
        margin-bottom: 20px;
        padding: 0;
    }

    ul.banner-social-buttons li:last-child {
        margin-bottom: 0;
    }
}

footer {
    padding: 50px 0;
}

footer p {
    margin: 0;
}

::-moz-selection {
    text-shadow: none;
    background: #fcfcfc;
    background: rgba(255,255,255,.2);
}

::selection {
    text-shadow: none;
    background: #fcfcfc;
    background: rgba(255,255,255,.2);
}

img::selection {
    background: 0 0;
}

img::-moz-selection {
    background: 0 0;
}

body {
    webkit-tap-highlight-color: rgba(255,255,255,.2);
}
