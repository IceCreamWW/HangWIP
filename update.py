import json
import os

part1 = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{name}</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>
    <link rel="stylesheet" type="text/css" href="css/fullpage.css"/>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body>
    <div id="fullpage">
        <div class="page-1 section">
            <div class="info">
                <div class="intro">
                {introduction}
                </div>
                <div class="name">
                {name}
                </div>
            </div>
            <a class="home" href="index.html">
                <img src="images/home.png"/>
            </a>
            <div class="slider">
                <section class="depicts-list">
'''

part2  = '''
                </section>
                <section class="thumbnails-list">
'''

part3 = '''
                </section>
            </div>
        </div>
        <div class="page-2 section">
            <video controls onclick="this.paused ? this.play() : this.pause();">
                <source src="videos/{video_name}" type="video/mp4">
            </video>
        </div>
    </div>
</body>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/slick.js"></script>
<script src="js/fullpage.js"></script>
<script src="js/{js}"></script>
</html>
'''

depict_html = '''
                    <div>
                        <div class="depict-wrapper">
                            <div class="depict">
                                    <img  class="depict-image" src="images/{img_dir}/{depict_img_name}">
                                    <div class="depict-text text-center">
                                        <img src="images/{img_dir}/procedure/{procedure_img_name}" alt="">{depict_text}
                                    </div>
                            </div>
                        </div>
                    </div>
'''


thumbnail_html = '''
                    <div class="thumbnail">
                        <img src="images/{img_dir}/{depict_img_name}">
                    </div>
'''

if __name__ == "__main__":
    for filename in os.listdir('./config'):

        with open("./config/" + filename, encoding='u8') as fp:
            info = json.load(fp)

        html = part1.format(**info)

        for depict in info["depicts"]:
            html += depict_html.format(**depict, img_dir=info["img_dir"])

        html += part2

        for depict in info["depicts"]:
            html += thumbnail_html.format(**depict, img_dir=info["img_dir"])

        html += part3.format(**info)

        with open(info["target"], 'w', encoding='u8') as fp:
            fp.write(html)




