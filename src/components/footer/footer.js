import React from 'react'
import "./footer.css";
const footer = () => {
    return (
        <html>
            <head>
                <script src="https://kit.fontawesome.com/1d92a0b2f1.js" crossorigin="anonymous"></script>
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-5c0N3zLL8LQxm1Z7V/f0vE9G7R1XOa+77oxxCpFv3qW7ElzZ2Q1vnB0nE+ljxV7XoiyBbkLij7pCwvzG+17p8w==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
            </head>
            <body>
                <div className='foot'>
                    <div className='text'>
                        <div className='tlogic'>
                            <h3>Tlogic Software Soultions, Nanded</h3>
                        </div>
                    </div>
                    <div className='icons'>
                        <ul class="social-media-icons">
                            <li><a href="https://www.facebook.com"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default footer