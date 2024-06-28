---
---

<style scoped>
   body {
            margin: 0;
            padding: 0;
        }

        .penguin {
            width: 300px;
            height: 300px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            position: relative;
            align-items: center;
        }

        /* 头部 */
        .penguin * {
            position: absolute;
        }

        .penguin-header {
            top: 10%;
            left: 25%;
            width: 50%;
            height: 45%;
            background: #000;
            border-radius: 70% 70% 60% 60%;
            z-index: 9;
        }

        .penguin-header .left-cheek {
            width: 60%;
            height: 70%;
            top: 15%;
            left: 5%;
            border-radius: 70% 70% 60% 60%;
            background: #fff;
        }

        .penguin-header .right-cheek {
            width: 60%;
            height: 70%;
            top: 15%;
            left: 35%;
            border-radius: 70% 70% 60% 60%;
            background: #fff;
        }

        .penguin-header .left-eye {
            top: 45%;
            left: 25%;
            background: black;
            width: 15%;
            height: 17%;
            border-radius: 50%;
        }

        .penguin-header .right-eye {
            top: 45%;
            left: 60%;
            background: black;
            width: 15%;
            height: 17%;
            border-radius: 50%;
        }

        .penguin-header .right-eye::after,
        .penguin-header .left-eye::after {
            content: "";
            position: absolute;
            top: 25%;
            left: 15%;
            background: white;
            width: 35%;
            height: 35%;
            border-radius: 50%;
        }

        .penguin-header .top-lip {
            width: 20%;
            height: 10%;
            background: orange;
            border-radius: 50%;
            bottom: 30%;
            left: 50%;
            transform: translateX(-50%);
        }

        .penguin-header .bottom-lip {
            width: 16%;
            height: 10%;
            background: orange;
            border-radius: 50%;
            bottom: 27%;
            left: 50%;
            transform: translateX(-50%);
        }

        .penguin-header .left-blush {
            background: pink;
            bottom: 25%;
            left: 14%;
            width: 15%;
            height: 10%;
            border-radius: 50%;
        }

        .penguin-header .right-blush {
            background: pink;
            bottom: 25%;
            right: 14%;
            width: 15%;
            height: 10%;
            border-radius: 50%;
        }

        .penguin-header .belly {
            top: 60%;
            left: 2.5%;
            background: white;
            width: 95%;
            height: 100%;
            border-radius: 120% 120% 100% 100%;
            z-index: -1;
        }

        /* 身体 */
        .penguin-body {
            width: 53%;
            height: 45%;
            border-radius: 70% 70% 100% 100%;
            background: #000;
            top: 40%;
            left: 23.5%;
            z-index: 1;
        }

        .penguin-body .left-hand {
            top: 0%;
            right: 75%;
            background: black;
            width: 30%;
            height: 60%;
            border-radius: 30% 30% 120% 30%;
            transform: rotate(45deg);
            z-index: -1;
        }

        .penguin-body .right-hand {
            top: 0%;
            left: 75%;
            background: black;
            width: 30%;
            height: 60%;
            border-radius: 30% 30% 30% 120%;
            transform: rotate(-45deg);
            z-index: -1;
        }

        /* 脚 */
        .penguin-footer {
            width: 40%;
            height: 15%;
            bottom: 5%;
        }

        .penguin-footer .left-feet {
            left: 0;
            background: orange;
            width: 33%;
            height: 40%;
            border-radius: 50%;
            transform: rotate(-10deg);
            top: 10%;
        }

        .penguin-footer .right-feet {
            background: orange;
            width: 33%;
            height: 40%;
            border-radius: 50%;
            transform: rotate(10deg);
            right: 0;
            top: 10%;
        }
</style>

<div class="penguin">
    <div class="penguin-header">
        <div class="left-cheek"></div>
        <div class="right-cheek"></div>
        <div class="left-eye"></div>
        <div class="right-eye"></div>
        <div class="top-lip"></div>
        <div class="bottom-lip"></div>
        <div class="left-blush"></div>
        <div class="right-blush"></div>
        <div class="belly"></div>
    </div>
    <div class="penguin-body">
        <div class="left-hand"></div>
        <div class="right-hand"></div>
    </div>
    <div class="penguin-footer">
        <div class="left-feet"></div>
        <div class="right-feet"></div>
    </div>
</div>
