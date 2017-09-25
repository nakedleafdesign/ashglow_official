<?php get_header(); ?>
<main class="main-container js-header-hidden__content">

  <section class="key-visual key-visual--darken" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/404/key-visual.jpg');">
    <div class="key-visual__inner">
      <div class="key-visual__unit">
        <h1 class="key-visual__title">404 Not Found</h1>
        <span class="key-visual__sub">This page doesn't exist , click here to go back ....</span>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="container__inner block-group">
      <section class="container">
        <h1 class="heading01">お探しのページは見つかりませんでした。</h1>
        <p>お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。</p>
        <p>
          上手く行かない時だってあります...<br>
          でもそんな時は無理せずちょっと休憩して、また歩き出せばいいんじゃないのかな？
        </p>
        <div class="btn-group--center mt50">
          <a class="btn btn01" href="<?php echo home_url( '/' ); ?>">TOPに戻る</a>
        </div>
      </section>
    </div>
  </div>
</main>
<?php get_footer(); ?>