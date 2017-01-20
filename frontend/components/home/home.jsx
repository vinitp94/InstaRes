import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className='home'>
    <div id='top-home'>
      <div id='home-title'>
        <h2>insta</h2>
        <h1>RES</h1>
      </div>
    </div>

    <div className='image-container'>
      <div className='tile-images'>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484902016/nvpfpxc3eis-janko-ferlic_c3mqtq.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901997/q3qbphza4ii-igor-ovsyannykov_sp5gvm.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484902017/i2afnaz31cg-cala_pd4kob.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901928/ynb8niq1qck-harshal-hirve_cawkgd.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484902034/epqniyi6s7e-syd-wachs_obnw8b.jpg'/>
        <Link to={`/restaurants/index/Seattle`}>
          <img className='city-link' src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_auto_contrast,g_center,h_120,q_100,w_120,z_0.6/v1484909161/o4ktwpteqso-ganapathy-kumar_ptg97w.jpg'/>
        </Link>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901912/xntwi0xmzr8-nabil-boukala_kskamw.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901984/f89mms4g4nu-blake-rice_t2jz7z.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484902033/go8wfzj3kle-alisa-anton_bj9pez.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901819/z-y6i45f9kq-ernest-porzi_u6sfxe.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901828/vjnebefe-u-heijo-reinl_n0mwl9.jpg'/>
        <Link to={`/restaurants/index/Chicago`}>
          <img className='city-link' src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_auto_contrast,g_center,h_120,w_120/v1484909247/lnojuusjzqm-roman-arkhipov_uowmpu.jpg'/>
        </Link>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901768/qj0zgkre1zg-brian-chan_m4bctw.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901739/xlxhm6uh4pa-benjamin-faust_pphbgr.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901802/dqlxphcca2g-keenan-loo_f8zog9.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484901817/zpdnajr5sco-pineapples_whcbdu.jpg'/>
      </div>
      <div className='tile-images'>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896892/l5i9l6hu64a-helen-martinez_pupkcs.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896899/py0qlfeaagy-daria-nepriakhina_n6ypj9.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896885/pt_ymiym7a4-cel-lisboa_uhj3op.jpg'/>
        <Link to={`/restaurants/index/San-Francisco`}>
          <img className='city-link' src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,dl_0,e_auto_contrast,fl_text_disallow_overflow,g_center,h_120,q_100,w_120/v1484909134/c0j_nqrzwow-changyu-hu_ti62ij.jpg'/>
        </Link>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896898/ttrjmhrkoey-juan-jose-valencia-antia_xohwx3.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896800/iysql-xjvhk-paul-morley_abftx8.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896872/vr28k9_irgc-correen_gtt8j5.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896762/dfitzyl3qi0-monstruo-estudio_fhtwtf.jpg'/>
        <Link to={`/restaurants/index/Los Angeles`}>
          <img className='city-link' src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_auto_contrast,g_center,h_120,w_120/v1484909164/anrrsb2wldk-ahmet-yalcinkaya_d4l97q.jpg'/>
        </Link>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896862/fheh2jqglvk-olia-gozha_dv6yz1.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896760/n_y88twmgwa-jay-wennington_bf6el9.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896809/ucyoeo5nsne-toa-heftiba_ddeyo0.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896736/xksrpuh0vzo-yvonne-lee-harijanto_n00kjn.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896739/yr4n8o_3upc-alex-munsell_u4b4yy.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896760/plmojilhdju-sebastian-lp_faqeh6.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896582/jivmv9he6bm-tae-in-kim_i3p6nr.jpg'/>
      </div>
      <div className='tile-images'>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896625/2necbg8iksw-brigitte-tohm_hfsxtu.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896639/cf_df-zl8iw-toa-heftiba_ff2cbp.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896583/ceeoxu1nzpw-sebastian-lp_cl9bkt.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896684/evsouv1eyxy-rachael-walker_bis88v.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896386/x7bbp1yjhx0-aldyth-moyla_bbzgw6.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_230,w_120/v1484896462/_sbms1trcie-andrew-itaga_tyfqus.jpg'/>
        <Link to={`/restaurants/index/Miami`}>
          <img className='city-link' src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_auto_contrast,g_center,h_120,w_120/v1484909122/xgduk32nyuo-wes-aspinall_qv6h9m.jpg'/>
        </Link>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896465/bjvzgi7p2my-chloe-benko-prieur_bm9nj0.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896397/dmfibmdyaiq-henrique-felix_gosciw.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896328/p8zdqz8y2vc-roman-kraft_oofgza.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896261/qydnkodhmo4-downeast-cheesecakes_caljep.jpg'/>
        <Link to={`/restaurants/index/New York`}>
          <img className='city-link' src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_auto_contrast,g_center,h_120,w_120/v1484909205/gmtx7uc6lnc-todd-quackenbush_tcwhjj.jpg'/>
        </Link>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896274/ra4mwm9_jka-matthew-hamilton_ggifxv.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896361/y8iaxogqllc-chris-lawton_p9ag1f.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896299/4flcsxl_5kq-mikey-boyle_qpkq9u.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896171/m4kpa7nc-l0-neven-krcmarek_htntnh.jpg'/>
      </div>
      <div className='tile-images'>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896028/12ehc6fxpyg-eaters-collective_i5ge9e.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896241/hd_qdaso7aw-scott-webb_hesmah.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895980/htlnw28fok-tim-gouw_ndzopk.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895990/qz5lpcpvdxe-mink-mingle_vyjzks.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484896203/rkikgpksi_g-jakob-owens_m9bdtq.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895855/htvtbs6e6qe-anh-phan_kyf2nx.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895881/d825jrxvun8-mike-kenneally_m0nzd3.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895752/pko6tevkg4c-kirsty-tg_vtccq2.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895798/7jyvkro7i5q-toa-heftiba_qdodlq.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895861/ypngzey9ijy-gabriel-gurrola_loknuz.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895855/bqlcyj-9-tk-hisu-lee_opmwun.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895859/3ysctnmj2m8-stas-ovsky_nzahkf.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895648/aumhyhrn2am-ben-garratt_i1snvq.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895474/1hptylozdgw-annie-spratt_sv3l20.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895532/gh5brigspyu-tadas-mikuckis_zqzkt8.jpg'/>
        <img src='https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,e_grayscale,g_center,h_120,w_120/v1484895577/xifbdegcy44-stefan-johnson_b0bf04.jpg'/>
      </div>
    </div>
  </div>
);

export default Home;
