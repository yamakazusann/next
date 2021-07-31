import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="wrapper clearfix">
      <div className="main">
        <h2 className="dden">HOT TOPIC</h2>
        <a href="#" className="hot-topic clearfix">
          <img className="image" src="/img/hot-topic.jpg" alt="コーディング画面" />
          <div className="content">
            <h3 className="title">実務で使えるHTML/CSS<br/>モダンコーディングTIPS</h3>
            <p className="desk">webフロントエンドの進化の勢いは止まるところを知りません。新しい要素が増えて大幅に表現力が広がったHTML/CSSを活用して...</p>
            <item className="date" datetime="2015-09-01">2015.09.01 TUE</item>
          </div>
        </a>
        <h2 className="heading">NEWS</h2>
        <div className="news">
        <ul className="scroll-list">
          <li className="scroll-item">
          <a href="#">
            <time className="date" datetime="2015-08-23">2015.08.23 SUN</time>
            <span className="category news">NEWS</span>
            <span className="title">WORKSを更新しました。</span>
          </a>
          </li>
          <li className="scroll-item">
          <a href="#">
            <time className="date" datetime="2015-08-12">2015.08.12 WED</time>
            <span className="category">TOPIC</span>
            <span className="title">CSSでここまでできる！？ホントに使えるCSSセレクタ10選！</span>
          </a>
        </li>
        <li className="scroll-item">
          <a href="#">
            <time className="date" datetime="2015-08-04">2015.08.04 TUE</time>
            <span className="category news">NEWS</span>
            <span className="title">TOPICSを更新しました。</span>
          </a>
        </li>
        <li className="scroll-item">
          <a href="#">
            <time className="date" datetime="2015-07-25">2015.07.25 SAT</time>
            <span className="category">TOPIC</span>
            <span className="title">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</span>
          </a>
        </li>
        <li className="scroll-item">
          <a href="#">
            <time className="date" datetime="2015-07-09">2015.07.09 THU</time>
            <span className="category">TOPIC</span>
            <span className="title">HTML5の新しい属性で手軽にフォームバリデーション</span>
          </a>
        </li>
        <li className="scroll-item">
          <a href="#">
            <time className="date" datetime="2015-06-30">2015.06.30 TUE</time>
            <span className="category news">NEWS</span>
            <span className="title">WORKSを更新しました。</span>
          </a>
        </li>
        <li className="scroll-item">
          <a href="#">
            <time className="date" datetime="2015-07-09">2015.07.09 THU</time>
            <span className="category">TOPIC</span>
            <span className="title">HTML5の新しい属性で手軽にフォームバリデーション</span>
          </a>
        </li>
        <li className="scroll-item">
          <a href="#">
            <time className="date" datetime="2015-06-30">2015.06.30 TUE</time>
            <span className="category news">NEWS</span>
            <span className="title">WORKSを更新しました。</span>
          </a>
        </li>
        </ul>
        </div>

        <div className="articles">
        <h2 className="dden">ARTICLES</h2>
        <div className="clearfix">
        <a href="#" className="article-box">
        <h3 className="title">実務で使えるHTML/cssモダンコーディングTIPS</h3>
        <p className="desc">新しい要素が増えて大幅に表現力が広がったよ逢逢逢逢逢逢逢逢逢あはいはいヒアはい</p>
        <time className="date" datetime="2015-06-17">2015.06.17 WED</time>
        <img className="image" src="/img/article.jpg" alt="コーディング画面" />
        </a>

        <a href="#" className="article-box">
        <h3 className="title">実務で使えるHTML/cssモダンコーディングTIPS</h3>
        <p className="desc">新しい要素が増えて大幅に表現力が広がったよ逢逢逢逢逢逢逢逢逢あはいはいヒアはい</p>
        <time className="date" datetime="2015-06-17">2015.06.17 WED</time>
        <img className="image" src="/img/article.jpg" alt="コーディング画面" />
        </a>

        <a href="#" className="article-box">
        <h3 className="title">実務で使えるHTML/cssモダンコーディングTIPS</h3>
        <p className="desc">新しい要素が増えて大幅に表現力が広がったよ逢逢逢逢逢逢逢逢逢あはいはいヒアはい</p>
        <time className="date" datetime="2015-06-17">2015.06.17 WED</time>
        <img className="image" src="/img/article.jpg" alt="コーディング画面" />
        </a>

        <a href="#" className="article-box">
        <h3 className="title">実務で使えるHTML/cssモダンコーディングTIPS</h3>
        <p className="desc">新しい要素が増えて大幅に表現力が広がったよ逢逢逢逢逢逢逢逢逢あはいはいヒアはい</p>
        <time className="date" datetime="2015-06-17">2015.06.17 WED</time>
        <img className="image" src="/img/article.jpg" alt="コーディング画面" />
        </a>

        <a href="#" className="article-box">
        <h3 className="title">実務で使えるHTML/cssモダンコーディングTIPS</h3>
        <p className="desc">新しい要素が増えて大幅に表現力が広がったよ逢逢逢逢逢逢逢逢逢あはいはいヒアはい</p>
        <time className="date" datetime="2015-06-17">2015.06.17 WED</time>
        <img className="image" src="/img/article.jpg" alt="コーディング画面" />
        </a>

        <a href="#" className="article-box">
        <h3 className="title">実務で使えるHTML/cssモダンコーディングTIPS</h3>
        <p className="desc">新しい要素が増えて大幅に表現力が広がったよ逢逢逢逢逢逢逢逢逢あはいはいヒアはい</p>
        <time className="date" datetime="2015-06-17">2015.06.17 WED</time>
        <img className="image" src="/img/article.jpg" alt="コーディング画面" />
        </a>


        </div>
        </div>
      </div>
      
      <div className="sidemenu">
      <h2 className="heading">RANKING</h2>
      <ol className="ranking">
        <li className="ranking-item">
          <a href="#">
            <img className="image" src="/img/ranking.jpg" alt="グラフの画像" />
            <span className="order"></span>
            <p className="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
          </a>
        </li>
        <li className="ranking-item">
          <a href="#">
            <img className="image" src="/img/ranking.jpg" alt="グラフの画像" />
            <span className="order"></span>
            <p className="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
          </a>
        </li>
        <li className="ranking-item">
          <a href="#">
            <img className="image" src="/img/ranking.jpg" alt="グラフの画像" />
            <span className="order"></span>
            <p className="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
          </a>
        </li>
        <li className="ranking-item">
          <a href="#">
            <img className="image" src="/img/ranking.jpg" alt="グラフの画像" />
            <span className="order"></span>
            <p className="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
          </a>
        </li>
        <li className="ranking-item">
          <a href="#">
            <img className="image" src="/img/ranking.jpg" alt="グラフの画像" />
            <span className="order"></span>
            <p className="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
          </a>
        </li>
        <li className="ranking-item">
          <a href="#">
            <img className="image" src="/img/ranking.jpg" alt="グラフの画像" />
            <span className="order"></span>
            <p className="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
          </a>
        </li>
        <li className="ranking-item">
          <a href="#">
            <img className="image" src="/img/ranking.jpg" alt="グラフの画像" />
            <span className="order"></span>
            <p className="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
          </a>
        </li>
      </ol>
      <h2 className="heading">DOCUMENTS</h2>
      <ul className="documents">
        <li>
          <h3 className="title">HTML5</h3>
          <ul>
            <li><a href="#">追加された要素</a></li>
            <li><a href="#">削除された要素</a></li>
            <li><a href="#">意味が変わった要素</a></li>
            <li><a href="#">HTML5のコンテンツモデル</a></li>
          </ul>
        </li>

        <li>
          <h3 className="title">CSS3</h3>
          <ul>
            <li><a href="#">追加されたプロパティ</a></li>
            <li><a href="#">追加されたセレクタ</a></li>
            <li><a href="#">追加された単位</a></li>
          </ul>
        </li>

        <li>
          <h3 className="title">JavaScript</h3>
          <ul>
            <li><a href="#">JavaScriptの言語仕様</a></li>
            <li><a href="#">ECMAScriptとは？</a></li>
            <li><a href="#">jQueryとは？</a></li>
          </ul>
        </li>


        <h2 className="hidden">SEARCH</h2>
        <form className="search-box">
          <input className="search-input" type="text" name="search"
          placeholder="SEARCH" />
          <input className="search-button" type="submit" value="検索" />
          <p className="text">サイト内の文章を検索できます</p>
        </form>











      </ul>
      </div>
    </div>
    )
}
