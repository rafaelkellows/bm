      <article>
        <!-- PAGE TITLE -->
        <h2>
          <span>Contato</span>
          <img class="graph" src="images/pages/grafico-contato.png" alt="" />
          <img src="images/pages/ilustra-contato.jpg" alt="" />
        </h2>
        <!-- BREAD CRUMB -->
        <ul class="nav-contents">
            <li><a class="contato" href="contato.php#contato" title="Contato">Contato</a></li>
            <li><a class="abra-sua-conta" href="contato.php#abra-sua-conta" title="Abra sua Conta">Abra sua Conta</a></li>
            <li><a class="correspondentes" href="contato.php#correspondentes" title="Correspondentes">Correspondentes</a></li>
            <li><a class="escritorios" href="contato.php#escritorios" title="Escritórios">Escritórios</a></li>
        </ul>
        <!-- CONTENT WITH ASIDE -->
        <div class="contents _aside _yes">
          <div class="cnt-contato">
            <h3>Contato</h3>
            <form class="form _label-to-left">
              <label>Nome</label>
              <input name="name" type="text" value="">
              <label>Telefone</label>
              <input name="phone-number" type="text" value="">
              <label>E-mail</label>
              <input name="e-mail" type="text" value="">
              <label>Assunto</label>
              <input name="subject" type="text" value="">
              <label>Estado</label>
              <input name="state" type="text" value="">
              <label>Cidade</label>
              <input name="city" type="text" value="">
              <label>Currículo</label>
              <input name="file" type="file" value="">
              <label>Mensagem</label>
              <textarea name="message"></textarea>
              <input type="submit" value="Enviar">
            </form>
          </div>
        </div>
        <aside>
          <nav class="social-navg">
            <a class="fa fa-facebook" href="javascript:void(0);" title="Facebook"></a>
            <a class="fa fa-linkedin" href="javascript:void(0);" title="LinkedIn"></a>
            <a class="fa fa-instagram" href="javascript:void(0);" title="Instagram"></a>
            <a class="fa fa-youtube-play" href="javascript:void(0);" title="Youtube"></a>
          </nav>
        </aside>
      </article>

      <?php
        @require_once('includes/content-chat.php');
      ?>
