import React, { useEffect, useState } from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Slider2 from "react-slick";
import "../web.css";

import YouTube from "react-youtube";

function Web() {
  var settings = {
    dots: false,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [videoId, setVideoId] = useState("pWfYG2AxDU4"); // Default video ID

  const carouselOptions = {
    items: 3, // Adjust as needed
    nav: true,
    rewind: true,
    autoplay: false,
  };

  const youtubeOpts = {
    height: "315",
    width: "560",
  };

  const videos = [
    { id: "VIDEO_ID_1", thumbnail: "https://img.youtube.com/vi/pWfYG2AxDU4/hqdefault.jpg" },
    { id: "VIDEO_ID_2", thumbnail: "https://img.youtube.com/vi/N3QJQLd9IS8/hqdefault.jpg" },
    // Add more videos as needed
  ];

  const onThumbnailClick = (videoId) => {
    setVideoId(videoId);
  };

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    function onYouTubeIframeAPIReady() {
      player = new window.YT.Player("player", {
        ...youtubeOpts,
        videoId,
        playerVars: {
          color: "white",
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          ecver: 2,
        },
      });
    }

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [videoId]);
  return (
    <>
      <div className="home">
        {/* home top social start */}
        <div className="home_top_soc">
          <ul className="nav social-nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <i className="fab fa-discord" />
                <span className="ml-2">Discord</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <i className="fab fa-twitter" />
                <span className="ml-2">Twitter</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <img src="./images/bi_medium.svg" alt="medium-icon" />
                <span className="ml-2">Medium</span>
              </a>
            </li>
          </ul>
        </div>
        {/* home top social end */}
        {/* hero section start */}
        <section className="hero">
          <div className="hero-overlay">
            <div className="shape-hero-top" />
            <div className="shape-hero-top-sm" />
            <div className="shape-hero-bottom-right" />
            <div className="shape-hero-bottom-left" />
            {/* nav start */}
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="container nav-container">
                <a className="navbar-brand logo" href="./">
                  <img
                    src="images/RadiantRealms-Logo-no-stars.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
                <div
                  id="hamburger"
                  className="d-lg-none navbar-toggler order-0 order-md-1"
                  data-toggle="collapse"
                  data-target="#top-nav"
                  aria-controls="top-nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onclick="display_menu()"
                >
                  <span />
                  <span />
                  <span />
                </div>
                <div
                  className="collapse navbar-collapse custom-navbar"
                  id="top-nav"
                >
                  <ul className="navbar-nav ml-auto d-flex align-items-lg-center">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://fiatfighterzs-organization.gitbook.io/"
                      >
                        White Paper
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://discord.gg/SsHyCJvv"
                      >
                        Discord
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#team">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link onclick" href="#launch">
                        Mint
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="btn btn-play-game" href="coming-soon.html">
                        Play Game
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* nav end */}
            {/* banner content start */}
            <div className="banner">
              <div className="relative banner-image mx-auto mb-2">
                <img
                  src="images/testing-2.gif"
                  alt="banner image"
                  className="img-fluid w-100"
                />
              </div>
              {/* banner image end  */}
              <h1 className="heading-1 banner-title text-white">
                <span className="text-theme-primary">Radiant Realms</span>
              </h1>
              <p className="text-white px-2 banner-text">
                FiatFighterz is a play to earn, bullet-hell mmo. Fight with
                friends to defend the world from the invading Fiat King!
                Together with your companions traverse and conquer the lands
                that were once left dormant and peaceful, that is until the
                power of an angry Fiat King scattered dangerous creatures across
                the beautiful landscapes in an attempt to take complete control!
              </p>
              <div className="text-center banner-btn-learn">
                <a href className="btn btn-learn-more">
                  Learn More
                </a>
              </div>
              <div className="banner-arrow-down">
                <button type="button" className="btn text-white p-0">
                  <i className="bx bx-chevron-down" />
                </button>
              </div>
            </div>
            {/* banner content end */}
          </div>
        </section>
        {/* hero section end */}
        {/* what are section end */}
        <section className="what-are py-100 pos-relative">
          <div className="shape-blue" />
          <div className="shape-pink" />
          <div className="shape-light-blue" />
          <div className="shape-orange" />
          <div className="shape-pink shape-pink-2" />
          <div className="container">
            <div className="sec-text text-center font-weight-bold start-hero-text">
              Start your hero path by selecting a unique class. Defeat enemies
              to learn and grow your character's strength. Search the world for
              unique equipment and items to help you along your journey!
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card video-card">
                  <div className="embed__container">
                    <div id="player"></div>
                  </div>
                  <div class="carousel__wrap mt-3">
                    <div options={carouselOptions}>
                      {videos.map((video) => (
                        <div key={video.id} className="item">
                          <img
                            src={video.thumbnail}
                            alt="Thumbnail"
                            onClick={() => onThumbnailClick(video.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* col end */}
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="what-are-right pl-lg-5 pl-0">
                  <p className="text-theme-primary what-are-title">
                    In FiatFighterz, you'll find elements such as:
                  </p>
                  <div className="what-are-text">
                    <div className="d-flex justify-content-start align-items-center what-are-list-item">
                      <div className="cus-check mr-3">
                        <i className="fas fa-check" />
                      </div>
                      <div>Massively multiplayer online</div>
                    </div>
                    {/* list item end */}
                    <div className="d-flex justify-content-start align-items-center what-are-list-item">
                      <div className="cus-check mr-3">
                        <i className="fas fa-check" />
                      </div>
                      <div>Boss fights and unique dungions</div>
                    </div>
                    {/* list item end */}
                    <div className="d-flex justify-content-start align-items-center what-are-list-item">
                      <div className="cus-check mr-3">
                        <i className="fas fa-check" />
                      </div>
                      <div>Extensive loot and unique items</div>
                    </div>
                    {/* list item end */}
                    <div className="d-flex justify-content-start align-items-center what-are-list-item">
                      <div className="cus-check mr-3">
                        <i className="fas fa-check" />
                      </div>
                      <div>Player to player trading</div>
                    </div>
                    {/* list item end */}
                    <div className="d-flex justify-content-start align-items-center what-are-list-item">
                      <div className="cus-check mr-3">
                        <i className="fas fa-check" />
                      </div>
                      <div>Tough and challenging fights</div>
                    </div>
                    {/* list item end */}
                  </div>
                </div>
              </div>
              {/* col endt */}
            </div>
            {/* row end */}
          </div>
          {/* launch details start */}
          <div id="launch" className="launch pos-relative">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="mint-count text-uppercase mx-auto" />
                  <h1 className="sec-title text-uppercase heading-1-upheaval">
                    What are the
                    <span className="text-theme-primary">launch</span> details?
                  </h1>
                  <p className="sec-text">
                    The launch will take place through Vikingland marketplace.
                    For best experience use Z3US wallet and purchase through
                    VikingLand. Within seconds you will receive your Fiatfighter
                    NFT which you can look up or trade on the VikingLand's
                    marketplace website.
                  </p>
                </div>
                {/* col end */}
                <div className="col-lg-6 text-center text-lg-left pl-0 pl-lg-5">
                  <img
                    src="images/showcase.png"
                    alt="what are"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* launch details end */}
          {/* collection start */}
          <div id="collection" className="collection">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="collection-left">
                    <img
                      src="images/giftest.gif"
                      alt="collection gif"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                {/* col end  */}
                <div className="col-lg-7 mt-5 mt-lg-0">
                  <div className="collection-right">
                    <div className="collection-item">
                      <h2 className="title heading-3-upheaval text-theme-primary">
                        GENESIS COLLECTION
                      </h2>
                      <p className="sec-text mb-0">
                        The Genesis FiatFighterz NFT collection consists of
                        3,333 entirely unique characters which makes all
                        FiatFighterz equally rare. Each Genesis FiatFighter is
                        an irrevocable member of FiatFighterz DAO and entitled
                        to one vote in all governance matters. Genesis
                        FiatFighterz can be revived ingame.
                      </p>
                    </div>
                    {/* item end  */}
                    <div className="collection-item">
                      <h2 className="title heading-3-upheaval text-theme-primary">
                        ACADEMY COLLECTION
                      </h2>
                      <p className="sec-text mb-0">
                        The Academy collection is created with the sole purpose
                        of being a ticket to the FiatFighter'z universe. Academy
                        collection NFTs do not serve as governance votes and be
                        careful… death is permanent
                      </p>
                    </div>
                    {/* item end  */}
                    <h2 className="title heading-4-upheaval">
                      <a href="#" className="text-theme-primary" />
                    </h2>
                  </div>
                  {/* item end  */}
                </div>
              </div>
              {/* col end  */}
            </div>
            <div className="gap" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="sec-title heading-1-upheaval text-uppercase text-center text-theme-primary">
                    Ultra Rare Fiatfighterz
                  </h1>
                </div>
                <div className="gap" />
                <div className="col-md-12">
                  <div className="slick-carousel">
                    <div className="slide-item">
                      <div className="img-item">
                        <img
                          src="./images/sprite_1_1_copia00893.png"
                          alt="fro"
                        />
                      </div>
                    </div>
                    <div className="slide-item">
                      <div className="img-item">
                        <img
                          src="./images/sprite_1_1_copia01063.png"
                          alt="fro"
                        />
                      </div>
                    </div>
                    <div className="slide-item">
                      <div className="img-item">
                        <img
                          src="./images/sprite_1_1_copia01083.png"
                          alt="fro"
                        />
                      </div>
                    </div>
                    <div className="slide-item">
                      <div className="img-item">
                        <img
                          src="./images/sprite_1_1_copia01113.png"
                          alt="fro"
                        />
                      </div>
                    </div>
                    <div className="slide-item">
                      <div className="img-item">
                        <img
                          src="./images/sprite_1_1_copia01012.png"
                          alt="fro"
                        />
                      </div>
                    </div>
                    <div className="slide-item">
                      <div className="img-item">
                        <img
                          src="./images/sprite_1_1_copia01083.png"
                          alt="fro"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <Slider {...settings}>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                    <div>
                      <h3>5</h3>
                    </div>
                    <div>
                      <h3>6</h3>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          {/* collection end */}
        </section>
        {/* what are section end */}
        {/* what is section start */}
        <section className="what-is pos-relative">
          <div className="container">
            <h1 className="sec-title heading-1-upheaval text-uppercase text-center">
              WHAT IS $fiat?
            </h1>
            <div className="what-is-text">
              <div className="d-flex justify-content-start what-is-list-item">
                <div className="cus-check">
                  <i className="fas fa-check" />
                </div>
                <div>
                  Player will be givien the choice to destory high valued and
                  rare items in exchange for $FIAT the game's native currency.
                  To obtain $FIAT tokens bring your acquired items to an in-game
                  merchant who will price each item based on its scarcity within
                  the game.
                </div>
              </div>
              {/* list item end */}
              <div className="d-flex justify-content-start what-is-list-item">
                <div className="cus-check">
                  <i className="fas fa-check" />
                </div>
                <div>
                  $FIAT is the primary means to get your hands on in-game
                  resourcees, accessories, gear, and other consumables.
                </div>
              </div>
              {/* list item end */}
              <div className="d-flex justify-content-start what-is-list-item">
                <div className="cus-check">
                  <i className="fas fa-check" />
                </div>
                <div>
                  The $FIAT token will be hosted on the Radix Network. This will
                  allow us to distribute token without high gas fees and handle
                  thousands of transactions.
                </div>
              </div>
              {/* list item end */}
              <div className="d-flex justify-content-start what-is-list-item">
                <div className="cus-check">
                  <i className="fas fa-check" />
                </div>
                <div>
                  $FIAT can also be used to buy Academy NFTs, name FiatFighterz,
                  write loreand other special features
                </div>
              </div>
              {/* list item end */}
            </div>
            <div className="d-flex justify-content-center what-is-btns">
              <a href="https://ociswap.com/" className="btn btn-what-is">
                Chart
              </a>
              <a href className="btn btn-what-is">
                Contact
              </a>
            </div>
          </div>
        </section>
        {/* what is section end */}
        {/* road map section end */}
        <section className="roadmap pos-relative text-white">
          <div className="shape-blue" />
          <div className="shape-pink" />
          <div className="shape-light-blue" />
          <div className="shape-orange" />
          <div className="container">
            <h1 className="sec-title heading-1-upheaval text-uppercase text-center text-theme-primary">
              Roadmap
            </h1>
            <div className="roadmap-text">
              <h2 className="heading-4 font-weight-bold lt-minus-2 roadmap-list-title">
                Before mint
              </h2>
              <div className="d-flex justify-content-start what-is-list-item pl-4">
                <div className="cus-check">
                  <i className="fas fa-chec" />
                </div>
                <div>All FiatFighter Unique art Sprites designed.</div>
              </div>
              {/* list item end */}
              <div className="d-flex justify-content-start what-is-list-item pl-4">
                <div className="cus-check">
                  <i className="fas fa-chec" />
                </div>
                <div>
                  The Beta Version of the game is complete and ready for release
                  after Radix mainnet is Live.
                </div>
              </div>
              {/* list item end */}
            </div>
            {/* item end */}
            <div className="roadmap-text">
              <h2 className="heading-4 font-weight-bold lt-minus-2 roadmap-list-title">
                After mint
              </h2>
              <div className="d-flex justify-content-start what-is-list-item pl-4">
                <div className="cus-check">
                  <i className="fas fa-chec" />
                </div>
                <div>
                  Fiat Fighterz the game released to Genesis nft holders
                </div>
              </div>
              {/* list item end */}
              <div className="d-flex justify-content-start what-is-list-item pl-4">
                <div className="cus-check">
                  <i className="fas fa-chec" />
                </div>
                <div>Launch of the $FIAT token</div>
              </div>
              {/* list item end */}
              <div className="d-flex justify-content-start what-is-list-item pl-4">
                <div className="cus-check mr-3">
                  <i className="fas fa-chec" />
                </div>
                <div>
                  Launch of Acedemy Collection- 2nd generation FiatFighterz NFTs
                </div>
              </div>
              {/* list item end */}
              <div className="d-flex justify-content-start what-is-list-item pl-4">
                <div className="cus-check">
                  <i className="fas fa-chec" />
                </div>
                <div>Voting Dapp released</div>
              </div>
              {/* list item end */}
              <div className="d-flex justify-content-start what-is-list-item pl-4">
                <div className="cus-check">
                  <i className="fas fa-chec" />
                </div>
                <div>Updated roadmap released</div>
              </div>
              <div className="d-flex justify-content-start what-is-list-item pl-4">
                <div className="cus-check">
                  <i className="fas fa-chec" />
                </div>
                <div>
                  Future roadmap features beyond this point will be decided by
                  the FiatFighterz DAO
                </div>
              </div>
              {/* list item end */}
            </div>
          </div>
        </section>
        {/* road map section end */}
        {/* faq section start */}
        <section className="faq bg-theme-primary-dark pos-relative">
          <div className="container">
            <h1 className="sec-title heading-1-upheaval text-uppercase text-center">
              faqs
            </h1>
            <div className="faq-text mt-5">
              <div className="faq-item">
                <div className="faq-item-question d-flex justify-content-start faq-list-item">
                  <div className="cus-question">
                    <i className="fas fa-question" />
                  </div>
                  <div>What Blockchain will the NFTs be Minted on?</div>
                </div>
                {/* list item question end */}
                <div className="faq-item-ans d-flex justify-content-start faq-list-item text-white">
                  <div className="cus-check">
                    <i className="fas fa-check" />
                  </div>
                  <div>
                    We believe that Radix DLT will soon take over the crypto and
                    web3 spaces. It is the only L1 solution that is technically
                    capable to provide unlimited scalability without breaking
                    the atomic composability. Supporting Radix is a long-term
                    goal so we are here to stay and to contribute to the growth
                    of the network. (Go check radixdlt.com for more details)
                  </div>
                </div>
                {/* list item ans end */}
              </div>
              {/* faq item */}
              <div className="faq-item">
                <div className="faq-item-question d-flex justify-content-start faq-list-item">
                  <div className="cus-question">
                    <i className="fas fa-question" />
                  </div>
                  <div>When does minting start?</div>
                </div>
                {/* list item question end */}
                <div className="faq-item-ans d-flex justify-content-start faq-list-item text-white">
                  <div className="cus-check">
                    <i className="fas fa-check" />
                  </div>
                  <div>
                    Starting 26 January 2023 you can reserve FiatFighterz by
                    sending XRD (Radix tokens) to the wallet show above.
                  </div>
                </div>
                {/* list item ans end */}
              </div>
              {/* faq item */}
              <div className="faq-item">
                <div className="faq-item-question d-flex justify-content-start faq-list-item">
                  <div className="cus-question">
                    <i className="fas fa-question" />
                  </div>
                  <div>When is the game being released</div>
                </div>
                {/* list item question end */}
                <div className="faq-item-ans d-flex justify-content-start faq-list-item text-white">
                  <div className="cus-check">
                    <i className="fas fa-check" />
                  </div>
                  <div>
                    Fiat Fighterz the game has been in development for over 2
                    years and is ready to be released to genesis nft holders
                    after Babylon Mainnet goes LIVE!
                  </div>
                </div>
                {/* list item ans end */}
              </div>
              {/* faq item */}
              <div className="faq-item">
                <div className="faq-item-question d-flex justify-content-start faq-list-item">
                  <div className="cus-question">
                    <i className="fas fa-question" />
                  </div>
                  <div>How many can I reserve at one time?</div>
                </div>
                {/* list item question end */}
                <div className="faq-item-ans d-flex justify-content-start faq-list-item text-white">
                  <div className="cus-check">
                    <i className="fas fa-check" />
                  </div>
                  <div>
                    You will be able to reserve up to 100 FiatFighterz per
                    transaction.
                  </div>
                </div>
                {/* list item ans end */}
              </div>
              {/* faq item */}
            </div>
          </div>
        </section>
        {/* faq section end */}
        {/* team section start */}
        <section className="team pos-relative">
          <div className="shape-blue" />
          <div className="shape-pink" />
          <div className="shape-light-blue" />
          <div className="shape-orange" />
          <div className="container">
            <h1 className="sec-title heading-1-upheaval text-uppercase text-white text-center">
              Meet our team
            </h1>
            <div id="team" className="row">
              <div className="col-sm-6 col-md-3">
                <div className="team-member text-center">
                  <img
                    src="./images/team/24.png"
                    alt=""
                    className="img-fluid team-member-img"
                  />
                  <div className="team-member-name mt-3 mb-2 text-white">
                    Cluse
                  </div>
                  <div className="team-member-designation text-white">
                    Creator
                    <a href="#" className="team-social-link">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
                {/* team end */}
              </div>
              {/* col end */}
              <div className="col-sm-6 col-md-3">
                <div className="team-member text-center">
                  <img
                    src="./images/team/13.png"
                    alt=""
                    className="img-fluid team-member-img"
                  />
                  <div className="team-member-name mt-3 mb-2 text-white">
                    Jingesky
                  </div>
                  <div className="team-member-designation text-white">
                    Lead Developer
                    <a href="#" className="team-social-link">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
                {/* team end */}
              </div>
              {/* col end */}
              {/* col end */}
              <div className="col-sm-6 col-md-3">
                <div className="team-member text-center">
                  <img
                    src="./images/team/17.png"
                    alt=""
                    className="img-fluid team-member-img"
                  />
                  <div className="team-member-name mt-3 mb-2 text-white">
                    Shagar
                  </div>
                  <div className="team-member-designation text-white">
                    Frontend Developer
                    <a href="#" className="team-social-link">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
                {/* team end */}
              </div>
              {/* col end */}
              {/* col end */}
              <div className="col-sm-6 col-md-3">
                <div className="team-member text-center">
                  <img
                    src="./images/team/74.png"
                    alt=""
                    className="img-fluid team-member-img"
                  />
                  <div className="team-member-name mt-3 mb-2 text-white">
                    TomDraws
                  </div>
                  <div className="team-member-designation text-white">
                    Designer
                    <a href="#" className="team-social-link">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
                {/* team end */}
              </div>
              {/* col end */}
              {/* col end */}
              <div className="col-sm-6 col-md-3">
                <div className="team-member text-center">
                  <img
                    src="./images/team/38.png"
                    alt=""
                    className="img-fluid team-member-img"
                  />
                  <div className="team-member-name mt-3 mb-2 text-white">
                    Bee
                  </div>
                  <div className="team-member-designation text-white">
                    Designer
                    <a href="#" className="team-social-link">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
                {/* team end */}
              </div>
              {/* col end */}
              {/* col end */}
              {/* col end */}
              {/* col end */}
            </div>
          </div>
        </section>
        {/* team section end */}
        {/* footer start */}
        <footer className="footer pt-4 pb-5 text-white text-center">
          <div className="container">
            <div className="logo mx-auto pt-3">
              <img src="images/logo.png" alt="logo" className="img-fluid" />
            </div>
            <ul className="nav footer-nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link text-white" href="#" />
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Lore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  NFT Contract
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Token Contract
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#" />
              </li>
            </ul>
            {/* footer nav end */}
            <ul className="nav social-nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-discord" />
                  <span className="ml-2">Discord</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-twitter" />
                  <span className="ml-2">Twitter</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className />
                  <span className="ml-2" />
                </a>
              </li>
            </ul>
            {/* footer social nav  */}
            <p className="text-capitalize pt-1">All rights Reserved 2022</p>
          </div>
        </footer>
        {/* footer end */}
        {/*  */}
        {/* owl carousel js */}
      </div>
    </>
  );
}

export default Web;
