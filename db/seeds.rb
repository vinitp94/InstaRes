# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'yelp'

# Seed users

User.create(username: 'Demo', email: 'demoemail@demo.com', password: 'demopassword')
User.create(username: 'user123', email: 'user1@demo.com', password: 'user123')
User.create(username: 'tester123', email: 'tester1@demo.com', password: 'tester123')

# Seed restaurants

CITIES = ['San Francisco', 'New York', 'Miami', 'Los Angeles', 'Chicago', 'Seattle'].freeze

CATEGORIES = [
  'American', 'Caribbean', 'Chinese', 'French', 'Greek', 'Indian', 'Italian',
  'Japanese', 'Mediterranean', 'Mexican', 'Moroccan', 'Thai'
].freeze

images = [
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931782/n_y88twmgwa-jay-wennington_qpdsup.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931778/0vrwj7rynqi-jimi-filipovski_gegt0k.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931765/mfs_fegsoqy-peter-hershey_mxcq3t.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931768/98jmhl28zk8-mira-bozhko_x76sdj.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931698/ynqvvs2sseq-olliss_pfo3nb.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931582/nvpfpxc3eis-janko-ferlic_t38l9g.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931648/wywzgddo0ty-omer-bonfil_gpgkno.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931693/ut1uovyfqv8-june-silny_bgyjej.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931529/4bhcrgcdxqi-anjeli-lundblad_zyhswi.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931672/ejufhh01lx0-skiathos-greece_natzgq.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931548/ya5olwjff4g-sofiya-levchenko_dja5ds.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931446/gg5-k-mjwuq-eaters-collective_gqngyw.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931408/x7bbp1yjhx0-aldyth-moyla_ge6cnf.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931424/nlbcoy8t9tc-brooke-lark_qurii0.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931761/rkikgpksi_g-jakob-owens_svmrz3.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931368/w6ftfbpcs9i-cala_vrpwps.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931547/aq_og51xgle-jennifer-pallian_ebyn5v.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931778/y8iaxogqllc-chris-lawton_nbrixq.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931387/fl_l6qobfn4-toa-heftiba_wi8pdt.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931223/da9frnxisga-kelly-brito_kzbu3e.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931293/a2f9j4u0444-yoori-koo_o5omtw.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931304/x9za3vjkigc-freddie-marriage_bgkxwv.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931387/dfbrrphtly0-jennifer-pallian_t5ruzz.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484931368/4as6y6uh70s-brooke-lark_wegt0e.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924317/5xz2sytoyvq-annie-spratt_yj2hny.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924314/qviri4ueqzy-adrien-sala_rntbor.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924296/lxc1qx1qulc-ive-erhard_smi3r2.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924292/ldxq4mnyb5u-artur-rutkowski_xqydi6.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924286/2kyfwctlqzc-kate-zaidova_jqxggf.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924275/dfbrrphtly0-jennifer-pallian_y5j3gs.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924251/sqymtdqymjo-asnim-asnim_wxpb3n.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924243/wioevpvrfw4-gold-coast-media-lab-helensvale-library_bfnel4.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924195/3pzraaeocsu-james-wei_nsa4ge.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924181/apoybda6_3y-thomas-schaefer_bphxfs.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924174/ifgve61aano-thomas-gamstaetter_q54dkg.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924103/bf0tkhhcuqi-gold-coast-media-lab-helensvale-library_oxbrrn.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924062/esisokxogdy-tim-wright_at66x8.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924050/yoglkwxw2sw-joanna-kosinska_jxihtg.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924041/ddzyotzunbk-eaters-collective_kr3vq8.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484924023/gw78g_i7gyo-jennifer-pallian_xtk20p.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922749/qfivxu7nxgu-sambazon_j0ilei.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922734/k60jspcbwke-kawin-harasai_t0kp6w.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922724/fgyekt1e6hc-brandon-morgan_x1nrc5.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922699/de7wn2yzt4g-josh-wilburne_keifwl.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922693/ifoxuilxry0-daria-nepriakhina_ugdmqr.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922657/xobyibymx20-elli-o_pt6w4k.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922642/flmxvqld-ni-niklas-rhose_xawvza.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922629/tzl1ucxg5es-robin-stickel_ede10s.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922627/9x-pwjxc0z8-olenka-kotyk_omx16s.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922616/mtt0mmbt1ws-epicurrence_njzuwb.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922615/z65rvuno1v4-brooke-cagle_hkgo61.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922586/jw4rkizfism-timothy-muza_u8p0mk.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922557/x9za3vjkigc-freddie-marriage_cxnu1o.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922543/0ruleosip8y-brooke-cagle_brkzdu.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922521/yt_dcmps5wg-anastasia-zhenina_amlbnk.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922481/eqsezncm4-c-olenka-kotyk_ud50ur.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922479/9rdmxivlxxq-alisa-anton_isonlh.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922462/wns3u-ovola-joseph-gonzalez_ig9dat.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922409/yjsoou0wt8c-cel-lisboa_qjiupn.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484922323/xpvhzvieetm-mantra-media_tk2r4d.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921996/emvxfvlwrbw-joseph-gonzalez_z5l4vv.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921976/ypngzey9ijy-gabriel-gurrola_xvggt4.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921975/c69hk1hkhys-jonathan-pielmayer_u34n8v.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921970/y3ap9oo9pjc-ali-inay_gjouj5.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921946/p7q36vpbfs8-thomas-schweighofer_jtorn9.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921943/j_iagugh6ri-annie-spratt_yy9uha.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921860/awj7srvivxo-casey-lee_ejjqma.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921859/vwqm9mbzddw-artur-rutkowski_lrvcqf.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921754/kmhkqgifoy0-brandon-morgan_fifkys.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921733/l__pel0mfog-dan-gold_v1jerg.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921724/surq2mkznxw-brina-blum_cjg1lz.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921646/zwhvz6-nw5i-stephanie-mccabe_qiufgy.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921615/esmxug33c0c-eaters-collective_l6xjsl.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921604/ritqq_qloic-ashwin-vaswani_eeewlk.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921587/otyxnxpbtoq-brooke-lark_l4yqmy.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921524/znog43hbee8-jade-wulfraat_rb40u3.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921523/azoqcek2kuq-herson-rodriguez_htgkkz.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921496/brkcnseqd-a-brooke-lark_fljw6u.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921451/zsb2mbzshji-stephanie-mccabe_dxth11.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921444/yxnpotkky94-jade-wulfraat_eyem0c.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921425/wi_9gwx1o-0-abigail-keenan_xmaerh.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921385/xlxhm6uh4pa-benjamin-faust_dxjwoo.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484921344/nb_q-m3cdzg-edward-franklin_etzsb2.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484902033/go8wfzj3kle-alisa-anton_bj9pez.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484902017/i2afnaz31cg-cala_pd4kob.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484902008/gnnmbvn6r64-alisa-anton_ymnmdq.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901997/q3qbphza4ii-igor-ovsyannykov_sp5gvm.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901984/f89mms4g4nu-blake-rice_t2jz7z.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901912/xntwi0xmzr8-nabil-boukala_kskamw.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901828/vjnebefe-u-heijo-reinl_n0mwl9.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901816/coijlczejnw-neha-deshmukh_taphkq.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901768/qj0zgkre1zg-brian-chan_m4bctw.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901679/pszzsuqsonu-toa-heftiba_vbl8mv.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901671/lqy6mhz7fyk-monstruo-estudio_zc3hxu.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901618/i2eyyfetfwc-federica-diliberto_b3i7on.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901587/dq5g1u1eg1q-shanice-garcia_f0zdcj.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901538/qiprtmulc-g-julien-pianetti_matqel.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901531/kk1hlai2lge-nirzar-pangarkar_bags2v.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901514/xksrpuh0vzo-yvonne-lee-harijanto_abtseb.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901503/ypzi_ca91m0-armando-ascorve-morales_ttb2gl.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901499/yr4n8o_3upc-alex-munsell_y5hiqa.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901496/e34hxlihyg8-matt-alaniz_hvossy.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484901459/jivmv9he6bm-tae-in-kim_qrubya.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896897/9lmwviuu-ai-gregoire-sitter_ztvdp2.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896897/witwdylurr8-alex-munsell_slazet.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896892/l5i9l6hu64a-helen-martinez_pupkcs.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896885/pt_ymiym7a4-cel-lisboa_uhj3op.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896872/vr28k9_irgc-correen_gtt8j5.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896862/fheh2jqglvk-olia-gozha_dv6yz1.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896809/ucyoeo5nsne-toa-heftiba_ddeyo0.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896762/dfitzyl3qi0-monstruo-estudio_fhtwtf.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896760/plmojilhdju-sebastian-lp_faqeh6.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896684/evsouv1eyxy-rachael-walker_bis88v.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896639/cf_df-zl8iw-toa-heftiba_ff2cbp.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896625/2necbg8iksw-brigitte-tohm_hfsxtu.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896465/bjvzgi7p2my-chloe-benko-prieur_bm9nj0.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896462/_sbms1trcie-andrew-itaga_tyfqus.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896453/jpkfc5_d-di-davide-cantelli_zw5qrs.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896397/dmfibmdyaiq-henrique-felix_gosciw.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896386/x7bbp1yjhx0-aldyth-moyla_bbzgw6.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896328/p8zdqz8y2vc-roman-kraft_oofgza.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896299/4flcsxl_5kq-mikey-boyle_qpkq9u.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896274/ra4mwm9_jka-matthew-hamilton_ggifxv.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896261/qydnkodhmo4-downeast-cheesecakes_caljep.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484896028/12ehc6fxpyg-eaters-collective_i5ge9e.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895990/qz5lpcpvdxe-mink-mingle_vyjzks.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895881/d825jrxvun8-mike-kenneally_m0nzd3.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895861/ypngzey9ijy-gabriel-gurrola_loknuz.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895855/bqlcyj-9-tk-hisu-lee_opmwun.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895855/htvtbs6e6qe-anh-phan_kyf2nx.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895798/7jyvkro7i5q-toa-heftiba_qdodlq.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895752/pko6tevkg4c-kirsty-tg_vtccq2.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895648/aumhyhrn2am-ben-garratt_i1snvq.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895634/abuqx0g4cdu-jessica-ruscello_f8xhui.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895577/xifbdegcy44-stefan-johnson_b0bf04.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895574/m0sngrhw5ow-laura-ockel_nsa78l.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895532/gh5brigspyu-tadas-mikuckis_zqzkt8.jpg',
  'https://res.cloudinary.com/dlhshbg79/image/upload/c_fill,h_200,w_300/v1484895474/1hptylozdgw-annie-spratt_sv3l20.jpg'
];

Yelp.client.configure do |config|
  config.consumer_key = ENV['YELP_CONSUMER_KEY']
  config.consumer_secret = ENV['YELP_CONSUMER_SECRET']
  config.token = ENV['YELP_TOKEN']
  config.token_secret = ENV['YELP_TOKEN_SECRET']
end

seed_restaurants = []

CITIES.each do |city|
  CATEGORIES.each do |cat|
    Yelp.client.search(city, { term: cat, limit: 1 }).businesses.each_with_index do |business, idx|
      rest = Restaurant.new
      rest.name = business.name
      rest.address = business.location.address.first
      rest.city = business.location.city
      rest.state = business.location.state_code
      rest.zip_code = business.location.postal_code
      rest.category = cat
      rest.description = 'This is just a temporary description for testing purposes.'
      rest.phone_num = business.phone
      rest.price = (1..5).to_a.sample
      rest.owner_id = User.all.sample.id
      rest.image_urls = []
      ((2..3).to_a.sample).times do
        rest.image_urls.push(images.first)
        images.rotate!
      end
      if rest.address && rest.city && rest.state && rest.zip_code
        coords = Geocoder.coordinates("#{rest.address},#{rest.city},#{rest.state} #{rest.zip_code.to_s}")
        rest.lat = coords[0]
        rest.long = coords[1]
      end

      rest.save! if rest.valid?
    end
  end
end

# Seed reviews

POSITIVE_REVIEW_BODIES = [
  "Excellent fresh food, excellent service; and we are picky. Beautiful views of the bridge, had a magical night. Noisy though.",
  "We had a perfect table overlooking the bay bridge. Lovely setting and delicious food.",
  "One of the best brunch meals I've had in a long time! Great food. Option to eat outside (quieter and nice on a sunny day with great views of the Bay Bridge).",
  "Quite a variety were available. A very enjoyable evening. It is expensive.",
  "Just tell them your price and let them do the work, you won't regret it.",
  "Delicious food, excellent service (especially at the chef's counter), but a little overpriced. Still, one of the better experiences I have had, and the quality of the food was top notch.",
  "Always one of my favorites , food is innovative and always the freshest available. Great Chef and service. Go for the sunsets on the west coast....",
  "Great rooftop dining. The views & atmosphere were amazing. Food was incredible and promptly served. Suggested for a weekend trip stop and it did not disappoint.",
  "Amazing food and sangria! Great staff and perfect views.",
  "We went for the food and found everything else just as good - the food was excellent - the chicken was very tasty and tender - I can see why it is the house specialty - but the kale salad was a surprising flavor treat.",
  "Incredible! The ambiance is great, the place is really modern and cool, and all of the good was delicious. The food options are very unique, as are the drinks. This place is great for both vegetarians and non vegetarians alike! Highly recommend!",
  "Crazy good. We just completely loved our meal. Great date night!",
  "Great restaurant for vegetarians, vegans and those that just enjoy great food.",
  "The roasted chicken was the best I've ever had, just amazing. The staff was wonderful and the decor was very cool and comfortable. I love this restaurant!",
  "Entire experience was amazing. I found the service team from the front through service to be exceptional. Looking forward to returning.",
  "Amazing, fenomenal! Best place ever! I'm sure I will come back!",
  "Excellent venue.Great views.Overpriced food and drink..but the view compensated for that...I suppose!",
  "Great views, wonderful way to see the skyline. Great ambience. The cheese board was very good. The small one was perfect for two. Would definitely return on a future visit.",
  "Beautiful view, great food and drinks. Great service.",
  "Great innovative food with a wonderful well trained staff.",
  "Our favorite restaurant from the day it opened and for years to come! Amazing new menu - short ribs are to die for! Perfect cuisine matched by perfect service! Thank you to Andrew and the entire team for taking such amazing care of us over the years!",
  "Hands down the best foot experience of my life. I was wowed by every dish and the service was superb to anything I've experienced. Cannot wait to go back...",
  "Innovative food, good service, interesting to visit especially as a tourist, reasonably good wines, pricy as many hotsopts are here.",
  "Quiet cozy little restaurant with an amazing menu. I literally wanted to try everything! Can't wait to go back.",
  "Such a delightful restaurant. The food, ambiance, and service was wonderful. Everything we sampled was beyond delicious. We sat in the patio and it was a charming, intimate space. I will absolutely return again.",
  "Great restaurant. Attentive and personable staff. Will definitely be back.",
  "Incredible view and very good food. Lovely server. The only thing service stuff didn't wait until we were all finished with our meal to clean the table.",
  "The evening was fabulous. A friend from NYC was in town and I wanted to WOW her. She loved the restaurant, the food, the ambience, the views, the music. It was perfect evening!",
  "Skeptical at first but food was delicious and service excellent. Not the most beautiful restaurant !!!! Weather was rainy so we we not able to enjoy the view of the water.",
  "We had a great time and everyone was great. We always look forward to an evening there.",
  "Everything was delicious! Will not disappoint! We have been back twice and will come back soon!",
  "Food and service outstanding. Beef wellington onion soup sticky toffee pudding all incredible. Pricey but worth it.",
  "Had an amazing experience at the restaurant. Staff were amazing and very helpful. The taster menu tasted absolutely fantastic. Quite possibly the best meal I have ever tasted.",
  "Great view of the city, food very good but very expensive.",
  "Best view in Las Vegas and great martinis in the bar for happy hour.",
  "Service was AMAZING. Very attentive and helpful. He had great suggestions and made it a very fun night.",
  "Phenomenal vegetable dishes! So good we just ordered several of them for our meal. Perfectly times to come out one at a time so that we could enjoy.",
  "Love the decor. The food was amazing. It's nice too because they offer a 4oz or an 8oz steak and sometimes you don't want a huge steak. The tomato and crab salad, mac and cheese, and smores dessert was so good!",
  "Awesome! Surprisingly good prices and the food was excellent. Our waiter was so helpful and friendly. Would go back!",
  "Couldn't find a single thing wrong with this restaurant! Definitely a must try when in town!"
]

NEGATIVE_REVIEW_BODIES = [
  "We left with lighter wallets yet unsatisfied palates, and walked next door to Epic, which offered better views, tastier food, friendlier service, less frenzy and lower prices.",
  "They charge too much. The food was good but not worth the price. Also, their wine by the glass is around $15/glass. Way too high.",
  "With the space enclosed the noise levels appear to rise and we found it verging on uncomfortable.",
  "Food was awful. Not at all Southern. Staff was accommodating and nice but the food was just starch and protein on a plate and very disappointing.",
  "Excellent view. Food was not what I expected for the price. I was not thrilled about the quality, or presentation or portion size. Too many lines. Thank goodness I had a reservation, but then had to get in line to go upstairs.",
  "Very slow service. Took 15 minutes for our drinks to arrive. Server was not attentive - all 4 of our water glasses were empty and the dessert arrived 25 minutes after placing the order. Lastly, it took 20 mins for our car to arrive from the valet.",
  "The ambiance is nice, however, the food is nothing to ride home about. It was pricey and to be honest we all walked out with room for more, yet we had no interest in ordering anything else again. The best dish was the octopus. Not impressed, would not return.",
  "Good service; food is overrated; extremely high prices - paying for the experience.",
  "I almost didn't want to write a review about this amazing restaurant because I didn't want to risk too many people hearing about this place. So I decided to give it one star instead.",
  "Wasn't much of a fan of the food. It's greasy and heavy and super spicy, and most of the flavors seem to be the same.",
  "My food tasted like it had been sitting out for half an hour. On another note, what an awesome staff manning the orders. Keep up the smiles!",
  "This was just so-so. I had high expectations for this place given its location in a foodie city, and a let down is an understatement. The food smelled great, but the taste was lacking.",
  "Highlight of the meal was a bus boy smuggling us two cheese sticks from the bar as we waited close to an hour between courses.The cheese sticks were delish.",
  "Found a fingernail in my food. The one star is for the waitress who seemed more traumatized than we were.",
  "They forgot my added avocado and charged me...unforgivable offense.",
  "Save yourself the trouble and don't go here...",
  "Food was cold and they overcharged me.. got into an argument with the manager",
  "They were out of material needed to make half the dishes on the menu.",
  "The food was alright but the ambeince was so bad. I felt uncomfortable the entire time that I couldn't even enjoy my meal.",
  "The waiter was extremely rude to my wife after he spilled on her. We immediately got up and left.",
  "The owner needs to wake up and start hiring responsible people who wants to provide good customer service. When I called 8 minutes to 3:00 the answering machine came on and said they and do not orders over the phone, so immediately called back,  someone picked up the phone and laid the receiver down but did not hang up!",
  "Nothing too special.",
  "Service: Terrible! Employees were so caught up with mingling amongst each other, not really attentive or aware of the customers.",
  "Server did not inform us of extra charges on sides so we ended up with a huge bill that we did not expect.",
  "They brought out the wrong order and the server argued with me and blamed me for ordering the wrong thing and changing my mind and forgetting.",
  "Absolutely terrible in every aspect. The worst dining experience I've ever had.",
  "Do you remember in the movie Elf with Will Ferrell in how he congratulates that diner for The World's Best Cup of Coffee when actually it was just really a really mediocre cup of coffee.",
  "Food is as expected - too much, too greasy, but exactly what we ordered.",
  "I did enjoy the food but I was so thirty for the rest of the evening and I suspect there was a lot of msg in the broth?",
  "What's going on?? I dined in last week and the taste was completely different!! Very bland and boring.",
  "Too small staff came off like it was all about the money, i need that genuine happy to have you feeling.",
  "Food was good but I didn't feel welcome at all.",
  "This place is very popular and is probably great for people in the neighborhood, but it may not be worth a trip across town with so many other options available.",
  "We had to wait 35 minutes just to get our food. But the food really was amazing.",
  "We had to wait for way too long for our food. The waitress was so ditzy and I hate to say this, she was just dumb! And so uncoordinated! She kept bumping into things.",
  "Now I don't even want to bother. I'm paranoid they'll spit in my food for complaining.",
  "Will I be back? Sure, when I get my water refilled! (I'm still waiting) - NOT!",
  "Service: Negative 5 Stars, Food: Negative 5 Stars, Value: Negative 5 Stars",
  "Just too expensive now. I ate there regularly... Sad to say I won't go back.",
  "Food is bland. Very bland, flavorless, dry (oh and it came with a free stone too on my salad!)."
]

(Restaurant.all.count * 3).times do
  rev = Review.new
  rev.rating = (1..5).to_a.sample
  if rev.rating > 2
    rev.body = POSITIVE_REVIEW_BODIES.sample
  else
    rev.body = NEGATIVE_REVIEW_BODIES.sample
  end

  rev.author_id = User.all.sample.id
  rev.restaurant_id = Restaurant.all.sample.id
  rev.save! if rev.valid?
end

# Seed favorites

(User.all.count * 5).times do
  fav = Favorite.new
  fav.user_id = User.all.sample.id
  fav.restaurant_id = Restaurant.all.sample.id
  fav.save! if fav.valid?
end
