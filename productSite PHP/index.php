<?php
      require_once $_SERVER['DOCUMENT_ROOT'].'/header.php';
?>

    <div class="sing-in">
        <h1 class="sing-heading">Название сервиса</h1>
        <div class="login-screen">
                <div class="login-screen-block">
                    <h3>Вход</h3>
                    <form action="/blocks.php" method="POST">
                        <h4>Email</h4>
                        <input type="email">
                        <h4>Пароль</h4>
                        <input type="password">
                        <button>Войти</button>
                    </form>
                    <a href="/password.php">Забыли пароль?</a>
                </div>
        </div>
    </div>


    <script src="js/script.js"></script>
</body>

</html>