
// ====================
// bevat de query strings voor de verschillende lagen
//
// formaat make_layer variabelen:
//
//<URL> string 'url',<color>: string '#RGB', <name>: string '[imagetype]tekst', <lijnbreedte>[.cirkelradius]: int/float, <zichtbaarheid> : boolean, [lijntpye][transparantie] :string '[aan uit (aan uit ( ...))][@transparantie]'
//
// imagetype: #l# = lijn, #dl#=dubbele lijn, #d# = stippellijn, #c#= transparant, #co# = cirkel opaque met cijfers
// aan/uit = pixellengte van de lijn, zichtbare lijn-open gedeelte
// transparantie = 0-1 transparantie van de lijn
//
//=====================
// ====================
// COPIAR 	
// COPIAR Copy this if you want a line
// COPIAR
// COPIAR	function nameofthefunction(color){
// COPIAR		return(
// COPIAR		{
// COPIAR			strokeColor:"color",
// COPIAR			strokeOpacity:0.7,
// COPIAR			strokeWidth:2,
// COPIAR			strokeLinecap: "square",
// COPIAR			strokeDashstyle: "1 0"
// COPIAR		});
// COPIAR	}
// COPIAR
// COPIAR Copy this if you want a point
// COPIAR	function nameofthefunction(color){
// COPIAR		return (
// COPIAR		{
// COPIAR			strokeColor:color,
// COPIAR			strokeOpacity:0.9,
// COPIAR			strokeWidth:3,
// COPIAR			pointRadius:5,
// COPIAR			fillColor:"white",
// COPIAR			fillOpacity:0.75
// COPIAR		});
// COPIAR	}
// COPIAR Copy this if you want an external icon
// COPIAR 		function tsforward(url){
// COPIAR 		return (
// COPIAR 		{
// COPIAR 			externalGraphic:url,
// COPIAR 			graphicOpacity: 0.75,
// COPIAR 			graphicWidth:20,
// COPIAR 			graphicHeight:20,
// COPIAR 			graphicXOffset: 4,
// COPIAR 			graphicYOffset: 0,
// COPIAR 			rotation:0
// COPIAR 		});
// COPIAR 	}
//	
// COPIAR	if (type == "nameofthetdid"){   of index.html
// COPIAR	map.addLayers([
// COPIAR  make_layer(QURL + "?data=(way[key=value](bbox);node(w);way[otherkey=othervalue](bbox);node(w););out+skel;",
// COPIAR  name="#typeoflineoriconinlegend#HTML code you want to show"
// COPIAR  nameofthefunction("http://urloftheicon" or "color"),
// COPIAR  false
// COPIAR	),
// COPIAR  from "make_layer" to ), you can replicate to generate every overpass query then... (next line)
// COPIAR			]);
// COPIAR			
// COPIAR		}
// VOCABULARI nameofthefuncition= name of the function, Each function with custom parameters has to have an unique name.
// VOCABULARI
// VOCABULARI strokeColor=color of the line
// VOCABULARI strokeOpacity=0-1 transparency of the line
// VOCABULARI strokeWidth=Width of the line
// VOCABULARI strokeLinecap=Form of the cap of the line
// VOCABULARI strokeDashstyle=start/end of the line pixels in which start the line, if it is discontinuous
// VOCABULARI pointRadius=number in píxels for the radius of the point
// VOCABULARI fillColor=color you want to fill the cercle
// VOCABULARI fillOpacity=0-1 transparency of the filled cercle
// VOCABULARI graphicOpacity=0-1 transparency of the icon
// VOCABULARI graphicWidth=in pixels, width of the icon
// VOCABULARI graphicHeight=in pixels, height of the icon
// VOCABULARI graphicXOffset=in pixels, offset in x from the point of the icon
// VOCABULARI graphicYOffset=in pixels, offset in y from the point of the icon
// VOCABULARI rotation:in grades, rotation angle of the icon
// VOCABULARI nameofthe td id you will find in index.html
// VOCABULARI QURL + "?data=overpass query"
// VOCABULARI #typeoflineoriconinlegend#: #l# = line, #dl#=discontinuous line, #d# = dashed line, #c#= cercle,#to# = point #ex#=external icon
// VOCABULARI nameofthefunction("color")
// VOCABULARI false or true default active option true enabled false unabled
// VOCABULARI Also you can custom the option to show the legend
//
function layerdef(type){

	/*
	 * {
	 * 	strokeColor: "red",
	 * 	strokeOpacity: 0.9,
	 * 	strokeWidth: 5,
	 * 	strokeLinecap: "square",
	 * 	strokeDashstyle: "1 0"
	 */
	function defaultSolidLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.7,
			strokeWidth:2,
			strokeLinecap: "square",
		});
	}

	function defaultDashedLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.7,
			strokeWidth:2,
			strokeLinecap: "square",
			strokeDashstyle: "6 10"
		});
	}

	if (type == "warning"){
		//	dit maakt de layers voor de cycleway tags
		map.addLayers([
		//highway=cycleway
//			make_layer(
//				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway~'path$|^footway$'][bicycle=designated](bbox);node(w););out+skel;",
//				name="#l#highway=cycleway",
//				defaultSolidLine("red"),
//				false,
//			),

make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:'](bbox);node['traffic_sign:2:forward'='ES:'](bbox);out+skel;",
name="#ex#&nbspES: forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:'](bbox);node['traffic_sign:2:backward'='ES:'](bbox);out+skel;",
name="#ex#&nbspES: backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B1a'](bbox);node['traffic_sign:2:forward'='ES:B1a'](bbox);out+skel;",
name="#ex#&nbspES:B1a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B1a'](bbox);node['traffic_sign:2:backward'='ES:B1a'](bbox);out+skel;",
name="#ex#&nbspES:B1a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B1b'](bbox);node['traffic_sign:2:forward'='ES:B1b'](bbox);out+skel;",
name="#ex#&nbspES:B1b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B1b'](bbox);node['traffic_sign:2:backward'='ES:B1b'](bbox);out+skel;",
name="#ex#&nbspES:B1b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2a'](bbox);node['traffic_sign:2:forward'='ES:B2a'](bbox);out+skel;",
name="#ex#&nbspES:B2a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2a'](bbox);node['traffic_sign:2:backward'='ES:B2a'](bbox);out+skel;",
name="#ex#&nbspES:B2a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2ar'](bbox);node['traffic_sign:2:forward'='ES:B2ar'](bbox);out+skel;",
name="#ex#&nbspES:B2ar forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2ar.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2ar'](bbox);node['traffic_sign:2:backward'='ES:B2ar'](bbox);out+skel;",
name="#ex#&nbspES:B2ar backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2ar.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2b'](bbox);node['traffic_sign:2:forward'='ES:B2b'](bbox);out+skel;",
name="#ex#&nbspES:B2b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2b'](bbox);node['traffic_sign:2:backward'='ES:B2b'](bbox);out+skel;",
name="#ex#&nbspES:B2b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2br'](bbox);node['traffic_sign:2:forward'='ES:B2br'](bbox);out+skel;",
name="#ex#&nbspES:B2br forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2br.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2br'](bbox);node['traffic_sign:2:backward'='ES:B2br'](bbox);out+skel;",
name="#ex#&nbspES:B2br backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2br.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2c'](bbox);node['traffic_sign:2:forward'='ES:B2c'](bbox);out+skel;",
name="#ex#&nbspES:B2c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2c'](bbox);node['traffic_sign:2:backward'='ES:B2c'](bbox);out+skel;",
name="#ex#&nbspES:B2c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2d'](bbox);node['traffic_sign:2:forward'='ES:B2d'](bbox);out+skel;",
name="#ex#&nbspES:B2d forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2d'](bbox);node['traffic_sign:2:backward'='ES:B2d'](bbox);out+skel;",
name="#ex#&nbspES:B2d backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2e'](bbox);node['traffic_sign:2:forward'='ES:B2e'](bbox);out+skel;",
name="#ex#&nbspES:B2e forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2e.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2e'](bbox);node['traffic_sign:2:backward'='ES:B2e'](bbox);out+skel;",
name="#ex#&nbspES:B2e backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2e.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B3a'](bbox);node['traffic_sign:2:forward'='ES:B3a'](bbox);out+skel;",
name="#ex#&nbspES:B3a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3a'](bbox);node['traffic_sign:2:backward'='ES:B3a'](bbox);out+skel;",
name="#ex#&nbspES:B3a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B3b'](bbox);node['traffic_sign:2:forward'='ES:B3b'](bbox);out+skel;",
name="#ex#&nbspES:B3b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3b'](bbox);node['traffic_sign:2:backward'='ES:B3b'](bbox);out+skel;",
name="#ex#&nbspES:B3b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B3c'](bbox);node['traffic_sign:2:forward'='ES:B3c'](bbox);out+skel;",
name="#ex#&nbspES:B3c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3c'](bbox);node['traffic_sign:2:backward'='ES:B3c'](bbox);out+skel;",
name="#ex#&nbspES:B3c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B3d'](bbox);node['traffic_sign:2:forward'='ES:B3d'](bbox);out+skel;",
name="#ex#&nbspES:B3d forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3d'](bbox);node['traffic_sign:2:backward'='ES:B3d'](bbox);out+skel;",
name="#ex#&nbspES:B3d backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:BE'](bbox);node['traffic_sign:2:forward'='ES:BE'](bbox);out+skel;",
name="#ex#&nbspES:BE forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BE.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:BE'](bbox);node['traffic_sign:2:backward'='ES:BE'](bbox);out+skel;",
name="#ex#&nbspES:BE backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BE.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:BS'](bbox);node['traffic_sign:2:forward'='ES:BS'](bbox);out+skel;",
name="#ex#&nbspES:BS forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BS.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:BS'](bbox);node['traffic_sign:2:backward'='ES:BS'](bbox);out+skel;",
name="#ex#&nbspES:BS backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BS.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CajGrua'](bbox);node['traffic_sign:2:forward'='ES:CajGrua'](bbox);out+skel;",
name="#ex#&nbspES:CajGrua forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CajGrua.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CajGrua'](bbox);node['traffic_sign:2:backward'='ES:CajGrua'](bbox);out+skel;",
name="#ex#&nbspES:CajGrua backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CajGrua.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:com_traffic_sign_dir2'](bbox);node['traffic_sign:2:forward'='ES:com_traffic_sign_dir2'](bbox);out+skel;",
name="#ex#&nbspES:com_traffic_sign_dir2 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_com_traffic_sign_dir2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:com_traffic_sign_dir2'](bbox);node['traffic_sign:2:backward'='ES:com_traffic_sign_dir2'](bbox);out+skel;",
name="#ex#&nbspES:com_traffic_sign_dir2 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_com_traffic_sign_dir2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:FP21'](bbox);node['traffic_sign:2:forward'='ES:FP21'](bbox);out+skel;",
name="#ex#&nbspES:FP21 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP21.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FP21'](bbox);node['traffic_sign:2:backward'='ES:FP21'](bbox);out+skel;",
name="#ex#&nbspES:FP21 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP21.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:FP4'](bbox);node['traffic_sign:2:forward'='ES:FP4'](bbox);out+skel;",
name="#ex#&nbspES:FP4 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FP4'](bbox);node['traffic_sign:2:backward'='ES:FP4'](bbox);out+skel;",
name="#ex#&nbspES:FP4 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:FR101'](bbox);node['traffic_sign:2:forward'='ES:FR101'](bbox);out+skel;",
name="#ex#&nbspES:FR101 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR101.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FR101'](bbox);node['traffic_sign:2:backward'='ES:FR101'](bbox);out+skel;",
name="#ex#&nbspES:FR101 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR101.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:FR301'](bbox);node['traffic_sign:2:forward'='ES:FR301'](bbox);out+skel;",
name="#ex#&nbspES:FR301 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR301.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FR301'](bbox);node['traffic_sign:2:backward'='ES:FR301'](bbox);out+skel;",
name="#ex#&nbspES:FR301 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR301.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:LEZ'](bbox);node['traffic_sign:2:forward'='ES:LEZ'](bbox);out+skel;",
name="#ex#&nbspES:LEZ forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_LEZ.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:LEZ'](bbox);node['traffic_sign:2:backward'='ES:LEZ'](bbox);out+skel;",
name="#ex#&nbspES:LEZ backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_LEZ.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:motorway'](bbox);node['traffic_sign:2:forward'='ES:motorway'](bbox);out+skel;",
name="#ex#&nbspES:motorway forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_motorway.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:motorway'](bbox);node['traffic_sign:2:backward'='ES:motorway'](bbox);out+skel;",
name="#ex#&nbspES:motorway backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_motorway.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1'](bbox);node['traffic_sign:2:forward'='ES:P1'](bbox);out+skel;",
name="#ex#&nbspES:P1 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1'](bbox);node['traffic_sign:2:backward'='ES:P1'](bbox);out+skel;",
name="#ex#&nbspES:P1 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P10a'](bbox);node['traffic_sign:2:forward'='ES:P10a'](bbox);out+skel;",
name="#ex#&nbspES:P10a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10a'](bbox);node['traffic_sign:2:backward'='ES:P10a'](bbox);out+skel;",
name="#ex#&nbspES:P10a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P10b'](bbox);node['traffic_sign:2:forward'='ES:P10b'](bbox);out+skel;",
name="#ex#&nbspES:P10b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10b'](bbox);node['traffic_sign:2:backward'='ES:P10b'](bbox);out+skel;",
name="#ex#&nbspES:P10b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P10c'](bbox);node['traffic_sign:2:forward'='ES:P10c'](bbox);out+skel;",
name="#ex#&nbspES:P10c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10c'](bbox);node['traffic_sign:2:backward'='ES:P10c'](bbox);out+skel;",
name="#ex#&nbspES:P10c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P11'](bbox);node['traffic_sign:2:forward'='ES:P11'](bbox);out+skel;",
name="#ex#&nbspES:P11 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P11'](bbox);node['traffic_sign:2:backward'='ES:P11'](bbox);out+skel;",
name="#ex#&nbspES:P11 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P11a'](bbox);node['traffic_sign:2:forward'='ES:P11a'](bbox);out+skel;",
name="#ex#&nbspES:P11a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P11a'](bbox);node['traffic_sign:2:backward'='ES:P11a'](bbox);out+skel;",
name="#ex#&nbspES:P11a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P12'](bbox);node['traffic_sign:2:forward'='ES:P12'](bbox);out+skel;",
name="#ex#&nbspES:P12 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P12.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P12'](bbox);node['traffic_sign:2:backward'='ES:P12'](bbox);out+skel;",
name="#ex#&nbspES:P12 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P12.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P13a'](bbox);node['traffic_sign:2:forward'='ES:P13a'](bbox);out+skel;",
name="#ex#&nbspES:P13a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P13a'](bbox);node['traffic_sign:2:backward'='ES:P13a'](bbox);out+skel;",
name="#ex#&nbspES:P13a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P13b'](bbox);node['traffic_sign:2:forward'='ES:P13b'](bbox);out+skel;",
name="#ex#&nbspES:P13b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P13b'](bbox);node['traffic_sign:2:backward'='ES:P13b'](bbox);out+skel;",
name="#ex#&nbspES:P13b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P14a'](bbox);node['traffic_sign:2:forward'='ES:P14a'](bbox);out+skel;",
name="#ex#&nbspES:P14a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P14a'](bbox);node['traffic_sign:2:backward'='ES:P14a'](bbox);out+skel;",
name="#ex#&nbspES:P14a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P14b'](bbox);node['traffic_sign:2:forward'='ES:P14b'](bbox);out+skel;",
name="#ex#&nbspES:P14b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P14b'](bbox);node['traffic_sign:2:backward'='ES:P14b'](bbox);out+skel;",
name="#ex#&nbspES:P14b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P15'](bbox);node['traffic_sign:2:forward'='ES:P15'](bbox);out+skel;",
name="#ex#&nbspES:P15 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15'](bbox);node['traffic_sign:2:backward'='ES:P15'](bbox);out+skel;",
name="#ex#&nbspES:P15 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P15a'](bbox);node['traffic_sign:2:forward'='ES:P15a'](bbox);out+skel;",
name="#ex#&nbspES:P15a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15a'](bbox);node['traffic_sign:2:backward'='ES:P15a'](bbox);out+skel;",
name="#ex#&nbspES:P15a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P15b'](bbox);node['traffic_sign:2:forward'='ES:P15b'](bbox);out+skel;",
name="#ex#&nbspES:P15b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15b'](bbox);node['traffic_sign:2:backward'='ES:P15b'](bbox);out+skel;",
name="#ex#&nbspES:P15b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a'](bbox);node['traffic_sign:2:forward'='ES:P16a'](bbox);out+skel;",
name="#ex#&nbspES:P16a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a'](bbox);node['traffic_sign:2:backward'='ES:P16a'](bbox);out+skel;",
name="#ex#&nbspES:P16a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b'](bbox);node['traffic_sign:2:forward'='ES:P16b'](bbox);out+skel;",
name="#ex#&nbspES:P16b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b'](bbox);node['traffic_sign:2:backward'='ES:P16b'](bbox);out+skel;",
name="#ex#&nbspES:P16b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P17'](bbox);node['traffic_sign:2:forward'='ES:P17'](bbox);out+skel;",
name="#ex#&nbspES:P17 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17'](bbox);node['traffic_sign:2:backward'='ES:P17'](bbox);out+skel;",
name="#ex#&nbspES:P17 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P17a'](bbox);node['traffic_sign:2:forward'='ES:P17a'](bbox);out+skel;",
name="#ex#&nbspES:P17a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17a'](bbox);node['traffic_sign:2:backward'='ES:P17a'](bbox);out+skel;",
name="#ex#&nbspES:P17a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P17b'](bbox);node['traffic_sign:2:forward'='ES:P17b'](bbox);out+skel;",
name="#ex#&nbspES:P17b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17b'](bbox);node['traffic_sign:2:backward'='ES:P17b'](bbox);out+skel;",
name="#ex#&nbspES:P17b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P19'](bbox);node['traffic_sign:2:forward'='ES:P19'](bbox);out+skel;",
name="#ex#&nbspES:P19 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P19.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P19'](bbox);node['traffic_sign:2:backward'='ES:P19'](bbox);out+skel;",
name="#ex#&nbspES:P19 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P19.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1a'](bbox);node['traffic_sign:2:forward'='ES:P1a'](bbox);out+skel;",
name="#ex#&nbspES:P1a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1a'](bbox);node['traffic_sign:2:backward'='ES:P1a'](bbox);out+skel;",
name="#ex#&nbspES:P1a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1b'](bbox);node['traffic_sign:2:forward'='ES:P1b'](bbox);out+skel;",
name="#ex#&nbspES:P1b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1b'](bbox);node['traffic_sign:2:backward'='ES:P1b'](bbox);out+skel;",
name="#ex#&nbspES:P1b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1c'](bbox);node['traffic_sign:2:forward'='ES:P1c'](bbox);out+skel;",
name="#ex#&nbspES:P1c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1c'](bbox);node['traffic_sign:2:backward'='ES:P1c'](bbox);out+skel;",
name="#ex#&nbspES:P1c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1d'](bbox);node['traffic_sign:2:forward'='ES:P1d'](bbox);out+skel;",
name="#ex#&nbspES:P1d forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1d'](bbox);node['traffic_sign:2:backward'='ES:P1d'](bbox);out+skel;",
name="#ex#&nbspES:P1d backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P2'](bbox);node['traffic_sign:2:forward'='ES:P2'](bbox);out+skel;",
name="#ex#&nbspES:P2 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P2'](bbox);node['traffic_sign:2:backward'='ES:P2'](bbox);out+skel;",
name="#ex#&nbspES:P2 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P20'](bbox);node['traffic_sign:2:forward'='ES:P20'](bbox);out+skel;",
name="#ex#&nbspES:P20 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20'](bbox);node['traffic_sign:2:backward'='ES:P20'](bbox);out+skel;",
name="#ex#&nbspES:P20 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P20a'](bbox);node['traffic_sign:2:forward'='ES:P20a'](bbox);out+skel;",
name="#ex#&nbspES:P20a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20a'](bbox);node['traffic_sign:2:backward'='ES:P20a'](bbox);out+skel;",
name="#ex#&nbspES:P20a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P20aP'](bbox);node['traffic_sign:2:forward'='ES:P20aP'](bbox);out+skel;",
name="#ex#&nbspES:P20aP forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20aP.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20aP'](bbox);node['traffic_sign:2:backward'='ES:P20aP'](bbox);out+skel;",
name="#ex#&nbspES:P20aP backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20aP.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P21'](bbox);node['traffic_sign:2:forward'='ES:P21'](bbox);out+skel;",
name="#ex#&nbspES:P21 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P21.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P21'](bbox);node['traffic_sign:2:backward'='ES:P21'](bbox);out+skel;",
name="#ex#&nbspES:P21 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P21.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P22'](bbox);node['traffic_sign:2:forward'='ES:P22'](bbox);out+skel;",
name="#ex#&nbspES:P22 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P22.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P22'](bbox);node['traffic_sign:2:backward'='ES:P22'](bbox);out+skel;",
name="#ex#&nbspES:P22 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P22.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P23'](bbox);node['traffic_sign:2:forward'='ES:P23'](bbox);out+skel;",
name="#ex#&nbspES:P23 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P23.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P23'](bbox);node['traffic_sign:2:backward'='ES:P23'](bbox);out+skel;",
name="#ex#&nbspES:P23 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P23.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P24'](bbox);node['traffic_sign:2:forward'='ES:P24'](bbox);out+skel;",
name="#ex#&nbspES:P24 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P24.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P24'](bbox);node['traffic_sign:2:backward'='ES:P24'](bbox);out+skel;",
name="#ex#&nbspES:P24 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P24.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P25'](bbox);node['traffic_sign:2:forward'='ES:P25'](bbox);out+skel;",
name="#ex#&nbspES:P25 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P25.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P25'](bbox);node['traffic_sign:2:backward'='ES:P25'](bbox);out+skel;",
name="#ex#&nbspES:P25 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P25.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P26'](bbox);node['traffic_sign:2:forward'='ES:P26'](bbox);out+skel;",
name="#ex#&nbspES:P26 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P26.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P26'](bbox);node['traffic_sign:2:backward'='ES:P26'](bbox);out+skel;",
name="#ex#&nbspES:P26 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P26.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P27'](bbox);node['traffic_sign:2:forward'='ES:P27'](bbox);out+skel;",
name="#ex#&nbspES:P27 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P27.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P27'](bbox);node['traffic_sign:2:backward'='ES:P27'](bbox);out+skel;",
name="#ex#&nbspES:P27 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P27.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P28'](bbox);node['traffic_sign:2:forward'='ES:P28'](bbox);out+skel;",
name="#ex#&nbspES:P28 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P28.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P28'](bbox);node['traffic_sign:2:backward'='ES:P28'](bbox);out+skel;",
name="#ex#&nbspES:P28 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P28.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P29'](bbox);node['traffic_sign:2:forward'='ES:P29'](bbox);out+skel;",
name="#ex#&nbspES:P29 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P29.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P29'](bbox);node['traffic_sign:2:backward'='ES:P29'](bbox);out+skel;",
name="#ex#&nbspES:P29 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P29.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P3'](bbox);node['traffic_sign:2:forward'='ES:P3'](bbox);out+skel;",
name="#ex#&nbspES:P3 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P3'](bbox);node['traffic_sign:2:backward'='ES:P3'](bbox);out+skel;",
name="#ex#&nbspES:P3 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P30'](bbox);node['traffic_sign:2:forward'='ES:P30'](bbox);out+skel;",
name="#ex#&nbspES:P30 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P30'](bbox);node['traffic_sign:2:backward'='ES:P30'](bbox);out+skel;",
name="#ex#&nbspES:P30 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P31'](bbox);node['traffic_sign:2:forward'='ES:P31'](bbox);out+skel;",
name="#ex#&nbspES:P31 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P31.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P31'](bbox);node['traffic_sign:2:backward'='ES:P31'](bbox);out+skel;",
name="#ex#&nbspES:P31 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P31.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P32'](bbox);node['traffic_sign:2:forward'='ES:P32'](bbox);out+skel;",
name="#ex#&nbspES:P32 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P32.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P32'](bbox);node['traffic_sign:2:backward'='ES:P32'](bbox);out+skel;",
name="#ex#&nbspES:P32 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P32.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P33'](bbox);node['traffic_sign:2:forward'='ES:P33'](bbox);out+skel;",
name="#ex#&nbspES:P33 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P33.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P33'](bbox);node['traffic_sign:2:backward'='ES:P33'](bbox);out+skel;",
name="#ex#&nbspES:P33 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P33.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P34'](bbox);node['traffic_sign:2:forward'='ES:P34'](bbox);out+skel;",
name="#ex#&nbspES:P34 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P34.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P34'](bbox);node['traffic_sign:2:backward'='ES:P34'](bbox);out+skel;",
name="#ex#&nbspES:P34 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P34.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P4'](bbox);node['traffic_sign:2:forward'='ES:P4'](bbox);out+skel;",
name="#ex#&nbspES:P4 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P4'](bbox);node['traffic_sign:2:backward'='ES:P4'](bbox);out+skel;",
name="#ex#&nbspES:P4 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P5'](bbox);node['traffic_sign:2:forward'='ES:P5'](bbox);out+skel;",
name="#ex#&nbspES:P5 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P5'](bbox);node['traffic_sign:2:backward'='ES:P5'](bbox);out+skel;",
name="#ex#&nbspES:P5 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P50'](bbox);node['traffic_sign:2:forward'='ES:P50'](bbox);out+skel;",
name="#ex#&nbspES:P50 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P50'](bbox);node['traffic_sign:2:backward'='ES:P50'](bbox);out+skel;",
name="#ex#&nbspES:P50 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P6'](bbox);node['traffic_sign:2:forward'='ES:P6'](bbox);out+skel;",
name="#ex#&nbspES:P6 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P6'](bbox);node['traffic_sign:2:backward'='ES:P6'](bbox);out+skel;",
name="#ex#&nbspES:P6 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P7'](bbox);node['traffic_sign:2:forward'='ES:P7'](bbox);out+skel;",
name="#ex#&nbspES:P7 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P7'](bbox);node['traffic_sign:2:backward'='ES:P7'](bbox);out+skel;",
name="#ex#&nbspES:P7 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P8'](bbox);node['traffic_sign:2:forward'='ES:P8'](bbox);out+skel;",
name="#ex#&nbspES:P8 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P8.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P8'](bbox);node['traffic_sign:2:backward'='ES:P8'](bbox);out+skel;",
name="#ex#&nbspES:P8 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P8.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P9a'](bbox);node['traffic_sign:2:forward'='ES:P9a'](bbox);out+skel;",
name="#ex#&nbspES:P9a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9a'](bbox);node['traffic_sign:2:backward'='ES:P9a'](bbox);out+skel;",
name="#ex#&nbspES:P9a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P9b'](bbox);node['traffic_sign:2:forward'='ES:P9b'](bbox);out+skel;",
name="#ex#&nbspES:P9b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9b'](bbox);node['traffic_sign:2:backward'='ES:P9b'](bbox);out+skel;",
name="#ex#&nbspES:P9b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P9c'](bbox);node['traffic_sign:2:forward'='ES:P9c'](bbox);out+skel;",
name="#ex#&nbspES:P9c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9c'](bbox);node['traffic_sign:2:backward'='ES:P9c'](bbox);out+skel;",
name="#ex#&nbspES:P9c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9c.png"),
false

),


		]);
	}
	
	if (type == "regulatory"){
		
		map.addLayers([

make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:primary'](bbox);node['traffic_sign:2:forward'='ES:primary'](bbox);out+skel;",
name="#ex#&nbspES:primary forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_primary.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:primary'](bbox);node['traffic_sign:2:backward'='ES:primary'](bbox);out+skel;",
name="#ex#&nbspES:primary backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_primary.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R1'](bbox);node['traffic_sign:2:forward'='ES:R1'](bbox);out+skel;",
name="#ex#&nbspES:R1 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R1'](bbox);node['traffic_sign:2:backward'='ES:R1'](bbox);out+skel;",
name="#ex#&nbspES:R1 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R100'](bbox);node['traffic_sign:2:forward'='ES:R100'](bbox);out+skel;",
name="#ex#&nbspES:R100 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R100'](bbox);node['traffic_sign:2:backward'='ES:R100'](bbox);out+skel;",
name="#ex#&nbspES:R100 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R101'](bbox);node['traffic_sign:2:forward'='ES:R101'](bbox);out+skel;",
name="#ex#&nbspES:R101 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R101.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R101'](bbox);node['traffic_sign:2:backward'='ES:R101'](bbox);out+skel;",
name="#ex#&nbspES:R101 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R101.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R102'](bbox);node['traffic_sign:2:forward'='ES:R102'](bbox);out+skel;",
name="#ex#&nbspES:R102 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R102.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R102'](bbox);node['traffic_sign:2:backward'='ES:R102'](bbox);out+skel;",
name="#ex#&nbspES:R102 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R102.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R103'](bbox);node['traffic_sign:2:forward'='ES:R103'](bbox);out+skel;",
name="#ex#&nbspES:R103 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R103.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R103'](bbox);node['traffic_sign:2:backward'='ES:R103'](bbox);out+skel;",
name="#ex#&nbspES:R103 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R103.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R104'](bbox);node['traffic_sign:2:forward'='ES:R104'](bbox);out+skel;",
name="#ex#&nbspES:R104 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R104.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R104'](bbox);node['traffic_sign:2:backward'='ES:R104'](bbox);out+skel;",
name="#ex#&nbspES:R104 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R104.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R105'](bbox);node['traffic_sign:2:forward'='ES:R105'](bbox);out+skel;",
name="#ex#&nbspES:R105 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R105.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R105'](bbox);node['traffic_sign:2:backward'='ES:R105'](bbox);out+skel;",
name="#ex#&nbspES:R105 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R105.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R106'](bbox);node['traffic_sign:2:forward'='ES:R106'](bbox);out+skel;",
name="#ex#&nbspES:R106 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R106.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R106'](bbox);node['traffic_sign:2:backward'='ES:R106'](bbox);out+skel;",
name="#ex#&nbspES:R106 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R106.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107'](bbox);node['traffic_sign:2:forward'='ES:R107'](bbox);out+skel;",
name="#ex#&nbspES:R107 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107'](bbox);node['traffic_sign:2:backward'='ES:R107'](bbox);out+skel;",
name="#ex#&nbspES:R107 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R108'](bbox);node['traffic_sign:2:forward'='ES:R108'](bbox);out+skel;",
name="#ex#&nbspES:R108 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R108.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R108'](bbox);node['traffic_sign:2:backward'='ES:R108'](bbox);out+skel;",
name="#ex#&nbspES:R108 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R108.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R109'](bbox);node['traffic_sign:2:forward'='ES:R109'](bbox);out+skel;",
name="#ex#&nbspES:R109 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R109.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R109'](bbox);node['traffic_sign:2:backward'='ES:R109'](bbox);out+skel;",
name="#ex#&nbspES:R109 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R109.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R110'](bbox);node['traffic_sign:2:forward'='ES:R110'](bbox);out+skel;",
name="#ex#&nbspES:R110 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R110.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R110'](bbox);node['traffic_sign:2:backward'='ES:R110'](bbox);out+skel;",
name="#ex#&nbspES:R110 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R110.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R111'](bbox);node['traffic_sign:2:forward'='ES:R111'](bbox);out+skel;",
name="#ex#&nbspES:R111 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R111.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R111'](bbox);node['traffic_sign:2:backward'='ES:R111'](bbox);out+skel;",
name="#ex#&nbspES:R111 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R111.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R112'](bbox);node['traffic_sign:2:forward'='ES:R112'](bbox);out+skel;",
name="#ex#&nbspES:R112 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R112.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R112'](bbox);node['traffic_sign:2:backward'='ES:R112'](bbox);out+skel;",
name="#ex#&nbspES:R112 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R112.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R113'](bbox);node['traffic_sign:2:forward'='ES:R113'](bbox);out+skel;",
name="#ex#&nbspES:R113 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R113.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R113'](bbox);node['traffic_sign:2:backward'='ES:R113'](bbox);out+skel;",
name="#ex#&nbspES:R113 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R113.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R114'](bbox);node['traffic_sign:2:forward'='ES:R114'](bbox);out+skel;",
name="#ex#&nbspES:R114 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R114.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R114'](bbox);node['traffic_sign:2:backward'='ES:R114'](bbox);out+skel;",
name="#ex#&nbspES:R114 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R114.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R115'](bbox);node['traffic_sign:2:forward'='ES:R115'](bbox);out+skel;",
name="#ex#&nbspES:R115 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R115.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R115'](bbox);node['traffic_sign:2:backward'='ES:R115'](bbox);out+skel;",
name="#ex#&nbspES:R115 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R115.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R116'](bbox);node['traffic_sign:2:forward'='ES:R116'](bbox);out+skel;",
name="#ex#&nbspES:R116 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R116.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R116'](bbox);node['traffic_sign:2:backward'='ES:R116'](bbox);out+skel;",
name="#ex#&nbspES:R116 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R116.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R117'](bbox);node['traffic_sign:2:forward'='ES:R117'](bbox);out+skel;",
name="#ex#&nbspES:R117 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R117.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R117'](bbox);node['traffic_sign:2:backward'='ES:R117'](bbox);out+skel;",
name="#ex#&nbspES:R117 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R117.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R2'](bbox);node['traffic_sign:2:forward'='ES:R2'](bbox);out+skel;",
name="#ex#&nbspES:R2 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R2'](bbox);node['traffic_sign:2:backward'='ES:R2'](bbox);out+skel;",
name="#ex#&nbspES:R2 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R200'](bbox);node['traffic_sign:2:forward'='ES:R200'](bbox);out+skel;",
name="#ex#&nbspES:R200 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R200'](bbox);node['traffic_sign:2:backward'='ES:R200'](bbox);out+skel;",
name="#ex#&nbspES:R200 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R200a'](bbox);node['traffic_sign:2:forward'='ES:R200a'](bbox);out+skel;",
name="#ex#&nbspES:R200a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R200a'](bbox);node['traffic_sign:2:backward'='ES:R200a'](bbox);out+skel;",
name="#ex#&nbspES:R200a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201'](bbox);node['traffic_sign:2:forward'='ES:R201'](bbox);out+skel;",
name="#ex#&nbspES:R201 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201'](bbox);node['traffic_sign:2:backward'='ES:R201'](bbox);out+skel;",
name="#ex#&nbspES:R201 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202'](bbox);node['traffic_sign:2:forward'='ES:R202'](bbox);out+skel;",
name="#ex#&nbspES:R202 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202'](bbox);node['traffic_sign:2:backward'='ES:R202'](bbox);out+skel;",
name="#ex#&nbspES:R202 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_10'](bbox);node['traffic_sign:2:forward'='ES:R202_10'](bbox);out+skel;",
name="#ex#&nbspES:R202_10 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_10'](bbox);node['traffic_sign:2:backward'='ES:R202_10'](bbox);out+skel;",
name="#ex#&nbspES:R202_10 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_2'](bbox);node['traffic_sign:2:forward'='ES:R202_2'](bbox);out+skel;",
name="#ex#&nbspES:R202_2 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_2'](bbox);node['traffic_sign:2:backward'='ES:R202_2'](bbox);out+skel;",
name="#ex#&nbspES:R202_2 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_24'](bbox);node['traffic_sign:2:forward'='ES:R202_24'](bbox);out+skel;",
name="#ex#&nbspES:R202_24 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_24.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_24'](bbox);node['traffic_sign:2:backward'='ES:R202_24'](bbox);out+skel;",
name="#ex#&nbspES:R202_24 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_24.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_5'](bbox);node['traffic_sign:2:forward'='ES:R202_5'](bbox);out+skel;",
name="#ex#&nbspES:R202_5 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_5'](bbox);node['traffic_sign:2:backward'='ES:R202_5'](bbox);out+skel;",
name="#ex#&nbspES:R202_5 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_7'](bbox);node['traffic_sign:2:forward'='ES:R202_7'](bbox);out+skel;",
name="#ex#&nbspES:R202_7 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_7'](bbox);node['traffic_sign:2:backward'='ES:R202_7'](bbox);out+skel;",
name="#ex#&nbspES:R202_7 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R203'](bbox);node['traffic_sign:2:forward'='ES:R203'](bbox);out+skel;",
name="#ex#&nbspES:R203 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203'](bbox);node['traffic_sign:2:backward'='ES:R203'](bbox);out+skel;",
name="#ex#&nbspES:R203 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R203_10'](bbox);node['traffic_sign:2:forward'='ES:R203_10'](bbox);out+skel;",
name="#ex#&nbspES:R203_10 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203_10'](bbox);node['traffic_sign:2:backward'='ES:R203_10'](bbox);out+skel;",
name="#ex#&nbspES:R203_10 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R203_7'](bbox);node['traffic_sign:2:forward'='ES:R203_7'](bbox);out+skel;",
name="#ex#&nbspES:R203_7 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203_7'](bbox);node['traffic_sign:2:backward'='ES:R203_7'](bbox);out+skel;",
name="#ex#&nbspES:R203_7 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204'](bbox);node['traffic_sign:2:forward'='ES:R204'](bbox);out+skel;",
name="#ex#&nbspES:R204 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204'](bbox);node['traffic_sign:2:backward'='ES:R204'](bbox);out+skel;",
name="#ex#&nbspES:R204 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205'](bbox);node['traffic_sign:2:forward'='ES:R205'](bbox);out+skel;",
name="#ex#&nbspES:R205 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205'](bbox);node['traffic_sign:2:backward'='ES:R205'](bbox);out+skel;",
name="#ex#&nbspES:R205 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R3'](bbox);node['traffic_sign:2:forward'='ES:R3'](bbox);out+skel;",
name="#ex#&nbspES:R3 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R3'](bbox);node['traffic_sign:2:backward'='ES:R3'](bbox);out+skel;",
name="#ex#&nbspES:R3 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300'](bbox);node['traffic_sign:2:forward'='ES:R300'](bbox);out+skel;",
name="#ex#&nbspES:R300 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300'](bbox);node['traffic_sign:2:backward'='ES:R300'](bbox);out+skel;",
name="#ex#&nbspES:R300 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300_100'](bbox);node['traffic_sign:2:forward'='ES:R300_100'](bbox);out+skel;",
name="#ex#&nbspES:R300_100 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_100'](bbox);node['traffic_sign:2:backward'='ES:R300_100'](bbox);out+skel;",
name="#ex#&nbspES:R300_100 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300_60'](bbox);node['traffic_sign:2:forward'='ES:R300_60'](bbox);out+skel;",
name="#ex#&nbspES:R300_60 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_60'](bbox);node['traffic_sign:2:backward'='ES:R300_60'](bbox);out+skel;",
name="#ex#&nbspES:R300_60 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300_70'](bbox);node['traffic_sign:2:forward'='ES:R300_70'](bbox);out+skel;",
name="#ex#&nbspES:R300_70 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_70'](bbox);node['traffic_sign:2:backward'='ES:R300_70'](bbox);out+skel;",
name="#ex#&nbspES:R300_70 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300_80'](bbox);node['traffic_sign:2:forward'='ES:R300_80'](bbox);out+skel;",
name="#ex#&nbspES:R300_80 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_80.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_80'](bbox);node['traffic_sign:2:backward'='ES:R300_80'](bbox);out+skel;",
name="#ex#&nbspES:R300_80 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_80.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301'](bbox);node['traffic_sign:2:forward'='ES:R301'](bbox);out+skel;",
name="#ex#&nbspES:R301 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301'](bbox);node['traffic_sign:2:backward'='ES:R301'](bbox);out+skel;",
name="#ex#&nbspES:R301 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R302'](bbox);node['traffic_sign:2:forward'='ES:R302'](bbox);out+skel;",
name="#ex#&nbspES:R302 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R302.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R302'](bbox);node['traffic_sign:2:backward'='ES:R302'](bbox);out+skel;",
name="#ex#&nbspES:R302 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R302.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R303'](bbox);node['traffic_sign:2:forward'='ES:R303'](bbox);out+skel;",
name="#ex#&nbspES:R303 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R303.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R303'](bbox);node['traffic_sign:2:backward'='ES:R303'](bbox);out+skel;",
name="#ex#&nbspES:R303 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R303.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R304'](bbox);node['traffic_sign:2:forward'='ES:R304'](bbox);out+skel;",
name="#ex#&nbspES:R304 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R304.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R304'](bbox);node['traffic_sign:2:backward'='ES:R304'](bbox);out+skel;",
name="#ex#&nbspES:R304 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R304.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R305'](bbox);node['traffic_sign:2:forward'='ES:R305'](bbox);out+skel;",
name="#ex#&nbspES:R305 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R305.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R305'](bbox);node['traffic_sign:2:backward'='ES:R305'](bbox);out+skel;",
name="#ex#&nbspES:R305 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R305.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R306'](bbox);node['traffic_sign:2:forward'='ES:R306'](bbox);out+skel;",
name="#ex#&nbspES:R306 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R306.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R306'](bbox);node['traffic_sign:2:backward'='ES:R306'](bbox);out+skel;",
name="#ex#&nbspES:R306 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R306.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R307'](bbox);node['traffic_sign:2:forward'='ES:R307'](bbox);out+skel;",
name="#ex#&nbspES:R307 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R307.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R307'](bbox);node['traffic_sign:2:backward'='ES:R307'](bbox);out+skel;",
name="#ex#&nbspES:R307 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R307.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308'](bbox);node['traffic_sign:2:forward'='ES:R308'](bbox);out+skel;",
name="#ex#&nbspES:R308 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308'](bbox);node['traffic_sign:2:backward'='ES:R308'](bbox);out+skel;",
name="#ex#&nbspES:R308 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308a'](bbox);node['traffic_sign:2:forward'='ES:R308a'](bbox);out+skel;",
name="#ex#&nbspES:R308a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308a'](bbox);node['traffic_sign:2:backward'='ES:R308a'](bbox);out+skel;",
name="#ex#&nbspES:R308a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308b'](bbox);node['traffic_sign:2:forward'='ES:R308b'](bbox);out+skel;",
name="#ex#&nbspES:R308b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308b'](bbox);node['traffic_sign:2:backward'='ES:R308b'](bbox);out+skel;",
name="#ex#&nbspES:R308b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308c'](bbox);node['traffic_sign:2:forward'='ES:R308c'](bbox);out+skel;",
name="#ex#&nbspES:R308c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308c'](bbox);node['traffic_sign:2:backward'='ES:R308c'](bbox);out+skel;",
name="#ex#&nbspES:R308c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308d'](bbox);node['traffic_sign:2:forward'='ES:R308d'](bbox);out+skel;",
name="#ex#&nbspES:R308d forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308d'](bbox);node['traffic_sign:2:backward'='ES:R308d'](bbox);out+skel;",
name="#ex#&nbspES:R308d backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308e'](bbox);node['traffic_sign:2:forward'='ES:R308e'](bbox);out+skel;",
name="#ex#&nbspES:R308e forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308e.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308e'](bbox);node['traffic_sign:2:backward'='ES:R308e'](bbox);out+skel;",
name="#ex#&nbspES:R308e backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308e.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R309'](bbox);node['traffic_sign:2:forward'='ES:R309'](bbox);out+skel;",
name="#ex#&nbspES:R309 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R309.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R309'](bbox);node['traffic_sign:2:backward'='ES:R309'](bbox);out+skel;",
name="#ex#&nbspES:R309 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R309.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R310'](bbox);node['traffic_sign:2:forward'='ES:R310'](bbox);out+skel;",
name="#ex#&nbspES:R310 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R310.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R310'](bbox);node['traffic_sign:2:backward'='ES:R310'](bbox);out+skel;",
name="#ex#&nbspES:R310 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R310.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R4'](bbox);node['traffic_sign:2:forward'='ES:R4'](bbox);out+skel;",
name="#ex#&nbspES:R4 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R4'](bbox);node['traffic_sign:2:backward'='ES:R4'](bbox);out+skel;",
name="#ex#&nbspES:R4 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R4.png"),
false

),
					 
			]);
	}	

	if (type == "information"){
		
		map.addLayers([
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S1'](bbox);out+skel;",
name="#ex#&nbspES:S1forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S1.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S1'](bbox);out+skel;",
name="#ex#&nbspES:S1backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S1.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S10'](bbox);out+skel;",
name="#ex#&nbspES:S10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S10'](bbox);out+skel;",
name="#ex#&nbspES:S10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S100'](bbox);out+skel;",
name="#ex#&nbspES:S100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100'](bbox);out+skel;",
name="#ex#&nbspES:S100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100.png"),
false


),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S101'](bbox);out+skel;",
name="#ex#&nbspES:S101forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S101.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S101'](bbox);out+skel;",
name="#ex#&nbspES:S101backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S101.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S102'](bbox);out+skel;",
name="#ex#&nbspES:S102forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S102.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S102'](bbox);out+skel;",
name="#ex#&nbspES:S102backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S102.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S103'](bbox);out+skel;",
name="#ex#&nbspES:S103forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S103.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S103'](bbox);out+skel;",
name="#ex#&nbspES:S103backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S103.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S104'](bbox);out+skel;",
name="#ex#&nbspES:S104forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S104.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S104'](bbox);out+skel;",
name="#ex#&nbspES:S104backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S104.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S105'](bbox);out+skel;",
name="#ex#&nbspES:S105forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105'](bbox);out+skel;",
name="#ex#&nbspES:S105backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S106'](bbox);out+skel;",
name="#ex#&nbspES:S106forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S106.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S106'](bbox);out+skel;",
name="#ex#&nbspES:S106backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S106.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S107'](bbox);out+skel;",
name="#ex#&nbspES:S107forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S107.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S107'](bbox);out+skel;",
name="#ex#&nbspES:S107backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S107.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S108'](bbox);out+skel;",
name="#ex#&nbspES:S108forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S108.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S108'](bbox);out+skel;",
name="#ex#&nbspES:S108backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S108.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S109'](bbox);out+skel;",
name="#ex#&nbspES:S109forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S109.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S109'](bbox);out+skel;",
name="#ex#&nbspES:S109backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S109.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S11'](bbox);out+skel;",
name="#ex#&nbspES:S11forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S11'](bbox);out+skel;",
name="#ex#&nbspES:S11backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S110'](bbox);out+skel;",
name="#ex#&nbspES:S110forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110'](bbox);out+skel;",
name="#ex#&nbspES:S110backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110.png"),
false

),

make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S111'](bbox);out+skel;",
name="#ex#&nbspES:S111forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111'](bbox);out+skel;",
name="#ex#&nbspES:S111backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S112'](bbox);out+skel;",
name="#ex#&nbspES:S112forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S112.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S112'](bbox);out+skel;",
name="#ex#&nbspES:S112backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S112.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S113'](bbox);out+skel;",
name="#ex#&nbspES:S113forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S113.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S113'](bbox);out+skel;",
name="#ex#&nbspES:S113backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S113.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S114'](bbox);out+skel;",
name="#ex#&nbspES:S114forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S114.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S114'](bbox);out+skel;",
name="#ex#&nbspES:S114backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S114.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S115'](bbox);out+skel;",
name="#ex#&nbspES:S115forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S115.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S115'](bbox);out+skel;",
name="#ex#&nbspES:S115backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S115.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S116'](bbox);out+skel;",
name="#ex#&nbspES:S116forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S116.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S116'](bbox);out+skel;",
name="#ex#&nbspES:S116backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S116.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S117'](bbox);out+skel;",
name="#ex#&nbspES:S117forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S117.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S117'](bbox);out+skel;",
name="#ex#&nbspES:S117backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S117.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S118'](bbox);out+skel;",
name="#ex#&nbspES:S118forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118'](bbox);out+skel;",
name="#ex#&nbspES:S118backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S119'](bbox);out+skel;",
name="#ex#&nbspES:S119forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S119.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S119'](bbox);out+skel;",
name="#ex#&nbspES:S119backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S119.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S11a'](bbox);out+skel;",
name="#ex#&nbspES:S11aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S11a'](bbox);out+skel;",
name="#ex#&nbspES:S11abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S11b'](bbox);out+skel;",
name="#ex#&nbspES:S11bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S11b'](bbox);out+skel;",
name="#ex#&nbspES:S11bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S11b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S12'](bbox);out+skel;",
name="#ex#&nbspES:S12forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S12.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S12'](bbox);out+skel;",
name="#ex#&nbspES:S12backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S12.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S120'](bbox);out+skel;",
name="#ex#&nbspES:S120forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S120.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S120'](bbox);out+skel;",
name="#ex#&nbspES:S120backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S120.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S121'](bbox);out+skel;",
name="#ex#&nbspES:S121forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S121.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S121'](bbox);out+skel;",
name="#ex#&nbspES:S121backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S121.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S122'](bbox);out+skel;",
name="#ex#&nbspES:S122forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S122.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S122'](bbox);out+skel;",
name="#ex#&nbspES:S122backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S122.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S123'](bbox);out+skel;",
name="#ex#&nbspES:S123forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S123.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S123'](bbox);out+skel;",
name="#ex#&nbspES:S123backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S123.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S124'](bbox);out+skel;",
name="#ex#&nbspES:S124forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S124.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S124'](bbox);out+skel;",
name="#ex#&nbspES:S124backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S124.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S125'](bbox);out+skel;",
name="#ex#&nbspES:S125forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S125.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S125'](bbox);out+skel;",
name="#ex#&nbspES:S125backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S125.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S126'](bbox);out+skel;",
name="#ex#&nbspES:S126forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S126.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S126'](bbox);out+skel;",
name="#ex#&nbspES:S126backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S126.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S127'](bbox);out+skel;",
name="#ex#&nbspES:S127forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S127.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S127'](bbox);out+skel;",
name="#ex#&nbspES:S127backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S127.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S13'](bbox);out+skel;",
name="#ex#&nbspES:S13forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S13.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S13'](bbox);out+skel;",
name="#ex#&nbspES:S13backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S13.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S14a'](bbox);out+skel;",
name="#ex#&nbspES:S14aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S14a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S14a'](bbox);out+skel;",
name="#ex#&nbspES:S14abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S14a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S14b'](bbox);out+skel;",
name="#ex#&nbspES:S14bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S14b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S14b'](bbox);out+skel;",
name="#ex#&nbspES:S14bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S14b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S15a'](bbox);out+skel;",
name="#ex#&nbspES:S15aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15a'](bbox);out+skel;",
name="#ex#&nbspES:S15abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S15b'](bbox);out+skel;",
name="#ex#&nbspES:S15bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15b'](bbox);out+skel;",
name="#ex#&nbspES:S15bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S15c'](bbox);out+skel;",
name="#ex#&nbspES:S15cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15c'](bbox);out+skel;",
name="#ex#&nbspES:S15cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S15d'](bbox);out+skel;",
name="#ex#&nbspES:S15dforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15d'](bbox);out+skel;",
name="#ex#&nbspES:S15dbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S16'](bbox);out+skel;",
name="#ex#&nbspES:S16forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S16.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S16'](bbox);out+skel;",
name="#ex#&nbspES:S16backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S16.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S17'](bbox);out+skel;",
name="#ex#&nbspES:S17forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S17.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S17'](bbox);out+skel;",
name="#ex#&nbspES:S17backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S17.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S17_500'](bbox);out+skel;",
name="#ex#&nbspES:S17_500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S17_500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S17_500'](bbox);out+skel;",
name="#ex#&nbspES:S17_500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S17_500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S18'](bbox);out+skel;",
name="#ex#&nbspES:S18forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S18.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S18'](bbox);out+skel;",
name="#ex#&nbspES:S18backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S18.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S19'](bbox);out+skel;",
name="#ex#&nbspES:S19forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S19.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S19'](bbox);out+skel;",
name="#ex#&nbspES:S19backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S19.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S1a'](bbox);out+skel;",
name="#ex#&nbspES:S1aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S1a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S1a'](bbox);out+skel;",
name="#ex#&nbspES:S1abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S1a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S2'](bbox);out+skel;",
name="#ex#&nbspES:S2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S2'](bbox);out+skel;",
name="#ex#&nbspES:S2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S20'](bbox);out+skel;",
name="#ex#&nbspES:S20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S20'](bbox);out+skel;",
name="#ex#&nbspES:S20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S20.png"),
false


),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_100'](bbox);out+skel;",
name="#ex#&nbspES:S22_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_100'](bbox);out+skel;",
name="#ex#&nbspES:S22_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_1000'](bbox);out+skel;",
name="#ex#&nbspES:S22_1000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_1000'](bbox);out+skel;",
name="#ex#&nbspES:S22_1000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_1200'](bbox);out+skel;",
name="#ex#&nbspES:S22_1200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_1200'](bbox);out+skel;",
name="#ex#&nbspES:S22_1200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_1300'](bbox);out+skel;",
name="#ex#&nbspES:S22_1300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_1300'](bbox);out+skel;",
name="#ex#&nbspES:S22_1300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_150'](bbox);out+skel;",
name="#ex#&nbspES:S22_150forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_150.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_150'](bbox);out+skel;",
name="#ex#&nbspES:S22_150backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_150.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_1500'](bbox);out+skel;",
name="#ex#&nbspES:S22_1500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_1500'](bbox);out+skel;",
name="#ex#&nbspES:S22_1500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_1500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_200'](bbox);out+skel;",
name="#ex#&nbspES:S22_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_200'](bbox);out+skel;",
name="#ex#&nbspES:S22_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_250'](bbox);out+skel;",
name="#ex#&nbspES:S22_250forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_250.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_250'](bbox);out+skel;",
name="#ex#&nbspES:S22_250backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_250.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_300'](bbox);out+skel;",
name="#ex#&nbspES:S22_300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_300'](bbox);out+skel;",
name="#ex#&nbspES:S22_300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_400'](bbox);out+skel;",
name="#ex#&nbspES:S22_400forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_400.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_400'](bbox);out+skel;",
name="#ex#&nbspES:S22_400backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_400.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_50'](bbox);out+skel;",
name="#ex#&nbspES:S22_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_50'](bbox);out+skel;",
name="#ex#&nbspES:S22_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_500'](bbox);out+skel;",
name="#ex#&nbspES:S22_500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_500'](bbox);out+skel;",
name="#ex#&nbspES:S22_500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_600'](bbox);out+skel;",
name="#ex#&nbspES:S22_600forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_600.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_600'](bbox);out+skel;",
name="#ex#&nbspES:S22_600backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_600.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_700'](bbox);out+skel;",
name="#ex#&nbspES:S22_700forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_700.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_700'](bbox);out+skel;",
name="#ex#&nbspES:S22_700backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_700.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_800'](bbox);out+skel;",
name="#ex#&nbspES:S22_800forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_800.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_800'](bbox);out+skel;",
name="#ex#&nbspES:S22_800backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_800.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22_900'](bbox);out+skel;",
name="#ex#&nbspES:S22_900forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_900.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22_900'](bbox);out+skel;",
name="#ex#&nbspES:S22_900backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22_900.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S23'](bbox);out+skel;",
name="#ex#&nbspES:S23forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S23.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S23'](bbox);out+skel;",
name="#ex#&nbspES:S23backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S23.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S26a'](bbox);out+skel;",
name="#ex#&nbspES:S26aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26a'](bbox);out+skel;",
name="#ex#&nbspES:S26abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S26b'](bbox);out+skel;",
name="#ex#&nbspES:S26bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26b'](bbox);out+skel;",
name="#ex#&nbspES:S26bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S26c'](bbox);out+skel;",
name="#ex#&nbspES:S26cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26c'](bbox);out+skel;",
name="#ex#&nbspES:S26cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S26Td_N'](bbox);out+skel;",
name="#ex#&nbspES:S26Td_Nforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26Td_N.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26Td_N'](bbox);out+skel;",
name="#ex#&nbspES:S26Td_Nbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26Td_N.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S26Ti_N'](bbox);out+skel;",
name="#ex#&nbspES:S26Ti_Nforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26Ti_N.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26Ti_N'](bbox);out+skel;",
name="#ex#&nbspES:S26Ti_Nbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26Ti_N.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S27'](bbox);out+skel;",
name="#ex#&nbspES:S27forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S27.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S27'](bbox);out+skel;",
name="#ex#&nbspES:S27backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S27.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S270'](bbox);out+skel;",
name="#ex#&nbspES:S270forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S270.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S270'](bbox);out+skel;",
name="#ex#&nbspES:S270backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S270.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S271'](bbox);out+skel;",
name="#ex#&nbspES:S271forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S271.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S271'](bbox);out+skel;",
name="#ex#&nbspES:S271backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S271.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S28'](bbox);out+skel;",
name="#ex#&nbspES:S28forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S28.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S28'](bbox);out+skel;",
name="#ex#&nbspES:S28backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S28.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S29'](bbox);out+skel;",
name="#ex#&nbspES:S29forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S29.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S29'](bbox);out+skel;",
name="#ex#&nbspES:S29backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S29.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S2a'](bbox);out+skel;",
name="#ex#&nbspES:S2aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S2a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S2a'](bbox);out+skel;",
name="#ex#&nbspES:S2abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S2a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S3'](bbox);out+skel;",
name="#ex#&nbspES:S3forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S3'](bbox);out+skel;",
name="#ex#&nbspES:S3backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S30'](bbox);out+skel;",
name="#ex#&nbspES:S30forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S30'](bbox);out+skel;",
name="#ex#&nbspES:S30backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S4'](bbox);out+skel;",
name="#ex#&nbspES:S4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S4'](bbox);out+skel;",
name="#ex#&nbspES:S4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S400'](bbox);out+skel;",
name="#ex#&nbspES:S400forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S400.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S400'](bbox);out+skel;",
name="#ex#&nbspES:S400backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S400.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S410'](bbox);out+skel;",
name="#ex#&nbspES:S410forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S410.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S410'](bbox);out+skel;",
name="#ex#&nbspES:S410backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S410.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S420'](bbox);out+skel;",
name="#ex#&nbspES:S420forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S420.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S420'](bbox);out+skel;",
name="#ex#&nbspES:S420backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S420.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S430'](bbox);out+skel;",
name="#ex#&nbspES:S430forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S430.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S430'](bbox);out+skel;",
name="#ex#&nbspES:S430backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S430.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S440'](bbox);out+skel;",
name="#ex#&nbspES:S440forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S440.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S440'](bbox);out+skel;",
name="#ex#&nbspES:S440backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S440.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S450'](bbox);out+skel;",
name="#ex#&nbspES:S450forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S450.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S450'](bbox);out+skel;",
name="#ex#&nbspES:S450backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S450.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S5'](bbox);out+skel;",
name="#ex#&nbspES:S5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S5'](bbox);out+skel;",
name="#ex#&nbspES:S5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S500'](bbox);out+skel;",
name="#ex#&nbspES:S500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S500'](bbox);out+skel;",
name="#ex#&nbspES:S500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S500b'](bbox);out+skel;",
name="#ex#&nbspES:S500bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S500b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S500b'](bbox);out+skel;",
name="#ex#&nbspES:S500bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S500b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S6'](bbox);out+skel;",
name="#ex#&nbspES:S6forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S6'](bbox);out+skel;",
name="#ex#&nbspES:S6backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7b'](bbox);out+skel;",
name="#ex#&nbspES:S7bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7b'](bbox);out+skel;",
name="#ex#&nbspES:S7bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7b2'](bbox);out+skel;",
name="#ex#&nbspES:S7b2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7b2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7b2'](bbox);out+skel;",
name="#ex#&nbspES:S7b2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7b2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7f'](bbox);out+skel;",
name="#ex#&nbspES:S7fforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7f.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7f'](bbox);out+skel;",
name="#ex#&nbspES:S7fbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7f.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_10'](bbox);out+skel;",
name="#ex#&nbspES:S7_10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8'](bbox);out+skel;",
name="#ex#&nbspES:S8forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8'](bbox);out+skel;",
name="#ex#&nbspES:S8backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800'](bbox);out+skel;",
name="#ex#&nbspES:S800forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800'](bbox);out+skel;",
name="#ex#&nbspES:S800backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800e'](bbox);out+skel;",
name="#ex#&nbspES:S800eforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800e.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800e'](bbox);out+skel;",
name="#ex#&nbspES:S800ebackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800e.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810'](bbox);out+skel;",
name="#ex#&nbspES:S810forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810'](bbox);out+skel;",
name="#ex#&nbspES:S810backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S820'](bbox);out+skel;",
name="#ex#&nbspES:S820forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S820.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S820'](bbox);out+skel;",
name="#ex#&nbspES:S820backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S820.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S821'](bbox);out+skel;",
name="#ex#&nbspES:S821forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S821.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S821'](bbox);out+skel;",
name="#ex#&nbspES:S821backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S821.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S830'](bbox);out+skel;",
name="#ex#&nbspES:S830forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S830.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S830'](bbox);out+skel;",
name="#ex#&nbspES:S830backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S830.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S840'](bbox);out+skel;",
name="#ex#&nbspES:S840forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840'](bbox);out+skel;",
name="#ex#&nbspES:S840backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S850'](bbox);out+skel;",
name="#ex#&nbspES:S850forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S850.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S850'](bbox);out+skel;",
name="#ex#&nbspES:S850backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S850.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S851'](bbox);out+skel;",
name="#ex#&nbspES:S851forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S851.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S851'](bbox);out+skel;",
name="#ex#&nbspES:S851backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S851.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S852'](bbox);out+skel;",
name="#ex#&nbspES:S852forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S852.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S852'](bbox);out+skel;",
name="#ex#&nbspES:S852backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S852.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S853'](bbox);out+skel;",
name="#ex#&nbspES:S853forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S853.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S853'](bbox);out+skel;",
name="#ex#&nbspES:S853backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S853.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S860'](bbox);out+skel;",
name="#ex#&nbspES:S860forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S860.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S860'](bbox);out+skel;",
name="#ex#&nbspES:S860backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S860.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S870'](bbox);out+skel;",
name="#ex#&nbspES:S870forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S870.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S870'](bbox);out+skel;",
name="#ex#&nbspES:S870backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S870.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8_100'](bbox);out+skel;",
name="#ex#&nbspES:S8_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_100'](bbox);out+skel;",
name="#ex#&nbspES:S8_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S9'](bbox);out+skel;",
name="#ex#&nbspES:S9forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S9.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S9'](bbox);out+skel;",
name="#ex#&nbspES:S9backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S9.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S900'](bbox);out+skel;",
name="#ex#&nbspES:S900forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S900.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S900'](bbox);out+skel;",
name="#ex#&nbspES:S900backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S900.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S910'](bbox);out+skel;",
name="#ex#&nbspES:S910forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S910.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S910'](bbox);out+skel;",
name="#ex#&nbspES:S910backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S910.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S920'](bbox);out+skel;",
name="#ex#&nbspES:S920forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S920.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S920'](bbox);out+skel;",
name="#ex#&nbspES:S920backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S920.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S930'](bbox);out+skel;",
name="#ex#&nbspES:S930forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S930.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S930'](bbox);out+skel;",
name="#ex#&nbspES:S930backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S930.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S940'](bbox);out+skel;",
name="#ex#&nbspES:S940forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S940.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S940'](bbox);out+skel;",
name="#ex#&nbspES:S940backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S940.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S950'](bbox);out+skel;",
name="#ex#&nbspES:S950forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S950.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S950'](bbox);out+skel;",
name="#ex#&nbspES:S950backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S950.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S960'](bbox);out+skel;",
name="#ex#&nbspES:S960forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S960.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S960'](bbox);out+skel;",
name="#ex#&nbspES:S960backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S960.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S970'](bbox);out+skel;",
name="#ex#&nbspES:S970forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S970.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S970'](bbox);out+skel;",
name="#ex#&nbspES:S970backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S970.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S980'](bbox);out+skel;",
name="#ex#&nbspES:S980forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S980.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S980'](bbox);out+skel;",
name="#ex#&nbspES:S980backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S980.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S990'](bbox);out+skel;",
name="#ex#&nbspES:S990forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S990.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S990'](bbox);out+skel;",
name="#ex#&nbspES:S990backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S990.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:secondary'](bbox);out+skel;",
name="#ex#&nbspES:secondaryforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_secondary.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:secondary'](bbox);out+skel;",
name="#ex#&nbspES:secondarybackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_secondary.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:tertiary'](bbox);out+skel;",
name="#ex#&nbspES:tertiaryforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_tertiary.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:tertiary'](bbox);out+skel;",
name="#ex#&nbspES:tertiarybackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_tertiary.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:tp18'](bbox);out+skel;",
name="#ex#&nbspES:tp18forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_tp18.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:tp18'](bbox);out+skel;",
name="#ex#&nbspES:tp18backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_tp18.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:traffic_sign_dir'](bbox);out+skel;",
name="#ex#&nbspES:traffic_sign_dirforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_traffic_sign_dir.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:traffic_sign_dir'](bbox);out+skel;",
name="#ex#&nbspES:traffic_sign_dirbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_traffic_sign_dir.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:trunk'](bbox);out+skel;",
name="#ex#&nbspES:trunkforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_trunk.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:trunk'](bbox);out+skel;",
name="#ex#&nbspES:trunkbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_trunk.png"),
false
			
			),
			
			]);
	}

	if (type == "cat"){
		//	dit maakt de layers voor de cycleway tags
		map.addLayers([
		//highway=cycleway
//			make_layer(
//				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway~'path$|^footway$'][bicycle=designated](bbox);node(w););out+skel;",
//				name="#l#highway=cycleway",
//				defaultSolidLine("red"),
//				false,
//			),

make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_com_s860'](bbox);node['traffic_sign:2:forward'='ES:CAT_com_s860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_com_s860 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_com_s860.svg"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_com_s860'](bbox);node['traffic_sign:2:backward'='ES:CAT_com_s860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_com_s860 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_com_s860.svg"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR10'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR10'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR10'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR10a'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR10a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10a'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR10a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR10b'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR10b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10b'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR10b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR21a'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR21a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21a'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR21a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR21b'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR21b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21b'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR21b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR21c'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR21c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21c'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR21c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR24b'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR24b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR24b'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR24b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR24c'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR24c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR24c'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR24c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR32'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR32'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR32 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR32.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR32'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR32'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR32 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR32.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR51'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR51'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR51 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR51.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR51'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR51'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR51 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR51.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR61'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR61'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR61 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR61.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR61'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR61'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR61 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR61.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR62'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR62'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR62 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR62.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR62'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR62'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR62 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR62.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR63'](bbox);node['traffic_sign:2:forward'='ES:CAT_OR63'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR63 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR63.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR63'](bbox);node['traffic_sign:2:backward'='ES:CAT_OR63'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR63 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR63.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_radar'](bbox);node['traffic_sign:2:forward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radar forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_radar'](bbox);node['traffic_sign:2:backward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radar backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_radar'](bbox);node['traffic_sign:2:forward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radar forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.svg"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_radar'](bbox);node['traffic_sign:2:backward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radar backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.svg"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S200'](bbox);node['traffic_sign:2:forward'='ES:CAT_S200'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200'](bbox);node['traffic_sign:2:backward'='ES:CAT_S200'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S200b'](bbox);node['traffic_sign:2:forward'='ES:CAT_S200b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200b'](bbox);node['traffic_sign:2:backward'='ES:CAT_S200b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S200c'](bbox);node['traffic_sign:2:forward'='ES:CAT_S200c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200c'](bbox);node['traffic_sign:2:backward'='ES:CAT_S200c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S230'](bbox);node['traffic_sign:2:forward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S230'](bbox);node['traffic_sign:2:backward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S230'](bbox);node['traffic_sign:2:forward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.svg"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S230'](bbox);node['traffic_sign:2:backward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.svg"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S270'](bbox);node['traffic_sign:2:forward'='ES:CAT_S270'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S270 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S270.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S270'](bbox);node['traffic_sign:2:backward'='ES:CAT_S270'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S270 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S270.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S300'](bbox);node['traffic_sign:2:forward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S300'](bbox);node['traffic_sign:2:backward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S300'](bbox);node['traffic_sign:2:forward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.svg"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S300'](bbox);node['traffic_sign:2:backward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.svg"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S351'](bbox);node['traffic_sign:2:forward'='ES:CAT_S351'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S351 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S351.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S351'](bbox);node['traffic_sign:2:backward'='ES:CAT_S351'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S351 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S351.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S520'](bbox);node['traffic_sign:2:forward'='ES:CAT_S520'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S520 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S520.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S520'](bbox);node['traffic_sign:2:backward'='ES:CAT_S520'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S520 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S520.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S600'](bbox);node['traffic_sign:2:forward'='ES:CAT_S600'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S600 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S600.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S600'](bbox);node['traffic_sign:2:backward'='ES:CAT_S600'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S600 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S600.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S700'](bbox);node['traffic_sign:2:forward'='ES:CAT_S700'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S700'](bbox);node['traffic_sign:2:backward'='ES:CAT_S700'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S700b'](bbox);node['traffic_sign:2:forward'='ES:CAT_S700b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S700b'](bbox);node['traffic_sign:2:backward'='ES:CAT_S700b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S860'](bbox);node['traffic_sign:2:forward'='ES:CAT_S860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S860 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S860.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S860'](bbox);node['traffic_sign:2:backward'='ES:CAT_S860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S860 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S860.png"),
false

),

			
			]);
	}

	if (type == "compulsory"){
		//	dit maakt de layers voor de cycleway tags
		map.addLayers([
		//highway=cycleway
//			make_layer(
//				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway~'path$|^footway$'][bicycle=designated](bbox);node(w););out+skel;",
//				name="#l#highway=cycleway",
//				defaultSolidLine("red"),
//				false,
//			),

make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400a'](bbox);node['traffic_sign:2:forward'='ES:R400a'](bbox);out+skel;",
name="#ex#&nbspES:R400a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400a'](bbox);node['traffic_sign:2:backward'='ES:R400a'](bbox);out+skel;",
name="#ex#&nbspES:R400a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400b'](bbox);node['traffic_sign:2:forward'='ES:R400b'](bbox);out+skel;",
name="#ex#&nbspES:R400b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400b'](bbox);node['traffic_sign:2:backward'='ES:R400b'](bbox);out+skel;",
name="#ex#&nbspES:R400b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400c'](bbox);node['traffic_sign:2:forward'='ES:R400c'](bbox);out+skel;",
name="#ex#&nbspES:R400c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400c'](bbox);node['traffic_sign:2:backward'='ES:R400c'](bbox);out+skel;",
name="#ex#&nbspES:R400c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400d'](bbox);node['traffic_sign:2:forward'='ES:R400d'](bbox);out+skel;",
name="#ex#&nbspES:R400d forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400d'](bbox);node['traffic_sign:2:backward'='ES:R400d'](bbox);out+skel;",
name="#ex#&nbspES:R400d backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400e'](bbox);node['traffic_sign:2:forward'='ES:R400e'](bbox);out+skel;",
name="#ex#&nbspES:R400e forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400e.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400e'](bbox);node['traffic_sign:2:backward'='ES:R400e'](bbox);out+skel;",
name="#ex#&nbspES:R400e backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400e.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R401a'](bbox);node['traffic_sign:2:forward'='ES:R401a'](bbox);out+skel;",
name="#ex#&nbspES:R401a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401a'](bbox);node['traffic_sign:2:backward'='ES:R401a'](bbox);out+skel;",
name="#ex#&nbspES:R401a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R401b'](bbox);node['traffic_sign:2:forward'='ES:R401b'](bbox);out+skel;",
name="#ex#&nbspES:R401b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401b'](bbox);node['traffic_sign:2:backward'='ES:R401b'](bbox);out+skel;",
name="#ex#&nbspES:R401b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R401c'](bbox);node['traffic_sign:2:forward'='ES:R401c'](bbox);out+skel;",
name="#ex#&nbspES:R401c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401c'](bbox);node['traffic_sign:2:backward'='ES:R401c'](bbox);out+skel;",
name="#ex#&nbspES:R401c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R402'](bbox);node['traffic_sign:2:forward'='ES:R402'](bbox);out+skel;",
name="#ex#&nbspES:R402 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R402.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R402'](bbox);node['traffic_sign:2:backward'='ES:R402'](bbox);out+skel;",
name="#ex#&nbspES:R402 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R402.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R403a'](bbox);node['traffic_sign:2:forward'='ES:R403a'](bbox);out+skel;",
name="#ex#&nbspES:R403a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403a'](bbox);node['traffic_sign:2:backward'='ES:R403a'](bbox);out+skel;",
name="#ex#&nbspES:R403a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R403b'](bbox);node['traffic_sign:2:forward'='ES:R403b'](bbox);out+skel;",
name="#ex#&nbspES:R403b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403b'](bbox);node['traffic_sign:2:backward'='ES:R403b'](bbox);out+skel;",
name="#ex#&nbspES:R403b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R403c'](bbox);node['traffic_sign:2:forward'='ES:R403c'](bbox);out+skel;",
name="#ex#&nbspES:R403c forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403c'](bbox);node['traffic_sign:2:backward'='ES:R403c'](bbox);out+skel;",
name="#ex#&nbspES:R403c backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R404'](bbox);node['traffic_sign:2:forward'='ES:R404'](bbox);out+skel;",
name="#ex#&nbspES:R404 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R404.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R404'](bbox);node['traffic_sign:2:backward'='ES:R404'](bbox);out+skel;",
name="#ex#&nbspES:R404 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R404.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R405'](bbox);node['traffic_sign:2:forward'='ES:R405'](bbox);out+skel;",
name="#ex#&nbspES:R405 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R405.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R405'](bbox);node['traffic_sign:2:backward'='ES:R405'](bbox);out+skel;",
name="#ex#&nbspES:R405 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R405.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R406'](bbox);node['traffic_sign:2:forward'='ES:R406'](bbox);out+skel;",
name="#ex#&nbspES:R406 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R406.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R406'](bbox);node['traffic_sign:2:backward'='ES:R406'](bbox);out+skel;",
name="#ex#&nbspES:R406 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R406.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R407a'](bbox);node['traffic_sign:2:forward'='ES:R407a'](bbox);out+skel;",
name="#ex#&nbspES:R407a forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R407a'](bbox);node['traffic_sign:2:backward'='ES:R407a'](bbox);out+skel;",
name="#ex#&nbspES:R407a backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R407b'](bbox);node['traffic_sign:2:forward'='ES:R407b'](bbox);out+skel;",
name="#ex#&nbspES:R407b forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R407b'](bbox);node['traffic_sign:2:backward'='ES:R407b'](bbox);out+skel;",
name="#ex#&nbspES:R407b backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R408'](bbox);node['traffic_sign:2:forward'='ES:R408'](bbox);out+skel;",
name="#ex#&nbspES:R408 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R408.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R408'](bbox);node['traffic_sign:2:backward'='ES:R408'](bbox);out+skel;",
name="#ex#&nbspES:R408 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R408.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R409'](bbox);node['traffic_sign:2:forward'='ES:R409'](bbox);out+skel;",
name="#ex#&nbspES:R409 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R409.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R409'](bbox);node['traffic_sign:2:backward'='ES:R409'](bbox);out+skel;",
name="#ex#&nbspES:R409 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R409.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R410'](bbox);node['traffic_sign:2:forward'='ES:R410'](bbox);out+skel;",
name="#ex#&nbspES:R410 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R410.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R410'](bbox);node['traffic_sign:2:backward'='ES:R410'](bbox);out+skel;",
name="#ex#&nbspES:R410 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R410.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411'](bbox);node['traffic_sign:2:forward'='ES:R411'](bbox);out+skel;",
name="#ex#&nbspES:R411 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411'](bbox);node['traffic_sign:2:backward'='ES:R411'](bbox);out+skel;",
name="#ex#&nbspES:R411 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R412'](bbox);node['traffic_sign:2:forward'='ES:R412'](bbox);out+skel;",
name="#ex#&nbspES:R412 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R412.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R412'](bbox);node['traffic_sign:2:backward'='ES:R412'](bbox);out+skel;",
name="#ex#&nbspES:R412 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R412.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R413'](bbox);node['traffic_sign:2:forward'='ES:R413'](bbox);out+skel;",
name="#ex#&nbspES:R413 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R413.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R413'](bbox);node['traffic_sign:2:backward'='ES:R413'](bbox);out+skel;",
name="#ex#&nbspES:R413 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R413.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R414'](bbox);node['traffic_sign:2:forward'='ES:R414'](bbox);out+skel;",
name="#ex#&nbspES:R414 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R414.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R414'](bbox);node['traffic_sign:2:backward'='ES:R414'](bbox);out+skel;",
name="#ex#&nbspES:R414 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R414.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R415'](bbox);node['traffic_sign:2:forward'='ES:R415'](bbox);out+skel;",
name="#ex#&nbspES:R415 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R415.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R415'](bbox);node['traffic_sign:2:backward'='ES:R415'](bbox);out+skel;",
name="#ex#&nbspES:R415 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R415.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R416'](bbox);node['traffic_sign:2:forward'='ES:R416'](bbox);out+skel;",
name="#ex#&nbspES:R416 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R416.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R416'](bbox);node['traffic_sign:2:backward'='ES:R416'](bbox);out+skel;",
name="#ex#&nbspES:R416 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R416.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R417'](bbox);node['traffic_sign:2:forward'='ES:R417'](bbox);out+skel;",
name="#ex#&nbspES:R417 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R417.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R417'](bbox);node['traffic_sign:2:backward'='ES:R417'](bbox);out+skel;",
name="#ex#&nbspES:R417 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R417.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R418'](bbox);node['traffic_sign:2:forward'='ES:R418'](bbox);out+skel;",
name="#ex#&nbspES:R418 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R418.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R418'](bbox);node['traffic_sign:2:backward'='ES:R418'](bbox);out+skel;",
name="#ex#&nbspES:R418 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R418.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R5'](bbox);node['traffic_sign:2:forward'='ES:R5'](bbox);out+skel;",
name="#ex#&nbspES:R5 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R5'](bbox);node['traffic_sign:2:backward'='ES:R5'](bbox);out+skel;",
name="#ex#&nbspES:R5 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R500'](bbox);node['traffic_sign:2:forward'='ES:R500'](bbox);out+skel;",
name="#ex#&nbspES:R500 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R500'](bbox);node['traffic_sign:2:backward'='ES:R500'](bbox);out+skel;",
name="#ex#&nbspES:R500 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501'](bbox);node['traffic_sign:2:forward'='ES:R501'](bbox);out+skel;",
name="#ex#&nbspES:R501 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501'](bbox);node['traffic_sign:2:backward'='ES:R501'](bbox);out+skel;",
name="#ex#&nbspES:R501 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R502'](bbox);node['traffic_sign:2:forward'='ES:R502'](bbox);out+skel;",
name="#ex#&nbspES:R502 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R502.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R502'](bbox);node['traffic_sign:2:backward'='ES:R502'](bbox);out+skel;",
name="#ex#&nbspES:R502 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R502.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R503'](bbox);node['traffic_sign:2:forward'='ES:R503'](bbox);out+skel;",
name="#ex#&nbspES:R503 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R503.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R503'](bbox);node['traffic_sign:2:backward'='ES:R503'](bbox);out+skel;",
name="#ex#&nbspES:R503 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R503.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R504'](bbox);node['traffic_sign:2:forward'='ES:R504'](bbox);out+skel;",
name="#ex#&nbspES:R504 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R504.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R504'](bbox);node['traffic_sign:2:backward'='ES:R504'](bbox);out+skel;",
name="#ex#&nbspES:R504 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R504.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R505'](bbox);node['traffic_sign:2:forward'='ES:R505'](bbox);out+skel;",
name="#ex#&nbspES:R505 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R505.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R505'](bbox);node['traffic_sign:2:backward'='ES:R505'](bbox);out+skel;",
name="#ex#&nbspES:R505 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R505.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506'](bbox);node['traffic_sign:2:forward'='ES:R506'](bbox);out+skel;",
name="#ex#&nbspES:R506 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506'](bbox);node['traffic_sign:2:backward'='ES:R506'](bbox);out+skel;",
name="#ex#&nbspES:R506 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_30'](bbox);node['traffic_sign:2:forward'='ES:R506_30'](bbox);out+skel;",
name="#ex#&nbspES:R506_30 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_30'](bbox);node['traffic_sign:2:backward'='ES:R506_30'](bbox);out+skel;",
name="#ex#&nbspES:R506_30 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_50'](bbox);node['traffic_sign:2:forward'='ES:R506_50'](bbox);out+skel;",
name="#ex#&nbspES:R506_50 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_50'](bbox);node['traffic_sign:2:backward'='ES:R506_50'](bbox);out+skel;",
name="#ex#&nbspES:R506_50 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_60'](bbox);node['traffic_sign:2:forward'='ES:R506_60'](bbox);out+skel;",
name="#ex#&nbspES:R506_60 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_60'](bbox);node['traffic_sign:2:backward'='ES:R506_60'](bbox);out+skel;",
name="#ex#&nbspES:R506_60 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_70'](bbox);node['traffic_sign:2:forward'='ES:R506_70'](bbox);out+skel;",
name="#ex#&nbspES:R506_70 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_70'](bbox);node['traffic_sign:2:backward'='ES:R506_70'](bbox);out+skel;",
name="#ex#&nbspES:R506_70 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_90'](bbox);node['traffic_sign:2:forward'='ES:R506_90'](bbox);out+skel;",
name="#ex#&nbspES:R506_90 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_90.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_90'](bbox);node['traffic_sign:2:backward'='ES:R506_90'](bbox);out+skel;",
name="#ex#&nbspES:R506_90 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_90.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R6'](bbox);node['traffic_sign:2:forward'='ES:R6'](bbox);out+skel;",
name="#ex#&nbspES:R6 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R6'](bbox);node['traffic_sign:2:backward'='ES:R6'](bbox);out+skel;",
name="#ex#&nbspES:R6 backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:Ruta_europea'](bbox);node['traffic_sign:2:forward'='ES:Ruta_europea'](bbox);out+skel;",
name="#ex#&nbspES:Ruta_europea forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_Ruta_europea.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:Ruta_europea'](bbox);node['traffic_sign:2:backward'='ES:Ruta_europea'](bbox);out+skel;",
name="#ex#&nbspES:Ruta_europea backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_Ruta_europea.png"),
false

),
			
			]);
	}

	if (type == "lanes"){
		//	dit maakt de layers voor de cycleway tags
		map.addLayers([
		//highway=cycleway
//			make_layer(
//				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway~'path$|^footway$'][bicycle=designated](bbox);node(w););out+skel;",
//				name="#l#highway=cycleway",
//				defaultSolidLine("red"),
//				false,
//			),

make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S200'](bbox);out+skel;",
name="#ex#&nbspES:S200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S200'](bbox);out+skel;",
name="#ex#&nbspES:S200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S21'](bbox);out+skel;",
name="#ex#&nbspES:S21forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S21.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S21'](bbox);out+skel;",
name="#ex#&nbspES:S21backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S21.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S22'](bbox);out+skel;",
name="#ex#&nbspES:S22forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S22'](bbox);out+skel;",
name="#ex#&nbspES:S22backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S22.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S220'](bbox);out+skel;",
name="#ex#&nbspES:S220forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S220.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S220'](bbox);out+skel;",
name="#ex#&nbspES:S220backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S220.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S222'](bbox);out+skel;",
name="#ex#&nbspES:S222forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S222.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S222'](bbox);out+skel;",
name="#ex#&nbspES:S222backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S222.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S222a'](bbox);out+skel;",
name="#ex#&nbspES:S222aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S222a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S222a'](bbox);out+skel;",
name="#ex#&nbspES:S222abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S222a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S224'](bbox);out+skel;",
name="#ex#&nbspES:S224forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S224.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S224'](bbox);out+skel;",
name="#ex#&nbspES:S224backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S224.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S225'](bbox);out+skel;",
name="#ex#&nbspES:S225forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S225.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S225'](bbox);out+skel;",
name="#ex#&nbspES:S225backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S225.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S230'](bbox);out+skel;",
name="#ex#&nbspES:S230forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S230.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S230'](bbox);out+skel;",
name="#ex#&nbspES:S230backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S230.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S230a'](bbox);out+skel;",
name="#ex#&nbspES:S230aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S230a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S230a'](bbox);out+skel;",
name="#ex#&nbspES:S230abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S230a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S232'](bbox);out+skel;",
name="#ex#&nbspES:S232forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S232.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S232'](bbox);out+skel;",
name="#ex#&nbspES:S232backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S232.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S232a'](bbox);out+skel;",
name="#ex#&nbspES:S232aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S232a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S232a'](bbox);out+skel;",
name="#ex#&nbspES:S232abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S232a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S235'](bbox);out+skel;",
name="#ex#&nbspES:S235forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S235.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S235'](bbox);out+skel;",
name="#ex#&nbspES:S235backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S235.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S235a'](bbox);out+skel;",
name="#ex#&nbspES:S235aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S235a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S235a'](bbox);out+skel;",
name="#ex#&nbspES:S235abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S235a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S24'](bbox);out+skel;",
name="#ex#&nbspES:S24forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S24.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S24'](bbox);out+skel;",
name="#ex#&nbspES:S24backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S24.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S242'](bbox);out+skel;",
name="#ex#&nbspES:S242forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S242'](bbox);out+skel;",
name="#ex#&nbspES:S242backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S242a'](bbox);out+skel;",
name="#ex#&nbspES:S242aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S242a'](bbox);out+skel;",
name="#ex#&nbspES:S242abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S242b'](bbox);out+skel;",
name="#ex#&nbspES:S242bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S242b'](bbox);out+skel;",
name="#ex#&nbspES:S242bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S242c'](bbox);out+skel;",
name="#ex#&nbspES:S242cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S242c'](bbox);out+skel;",
name="#ex#&nbspES:S242cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S242c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S25'](bbox);out+skel;",
name="#ex#&nbspES:S25forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S25.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S25'](bbox);out+skel;",
name="#ex#&nbspES:S25backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S25.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S250'](bbox);out+skel;",
name="#ex#&nbspES:S250forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S250.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S250'](bbox);out+skel;",
name="#ex#&nbspES:S250backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S250.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S260'](bbox);out+skel;",
name="#ex#&nbspES:S260forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S260.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S260'](bbox);out+skel;",
name="#ex#&nbspES:S260backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S260.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S261'](bbox);out+skel;",
name="#ex#&nbspES:S261forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S261.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S261'](bbox);out+skel;",
name="#ex#&nbspES:S261backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S261.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S263'](bbox);out+skel;",
name="#ex#&nbspES:S263forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S263.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S263'](bbox);out+skel;",
name="#ex#&nbspES:S263backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S263.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S263a'](bbox);out+skel;",
name="#ex#&nbspES:S263aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S263a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S263a'](bbox);out+skel;",
name="#ex#&nbspES:S263abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S263a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S264'](bbox);out+skel;",
name="#ex#&nbspES:S264forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S264.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S264'](bbox);out+skel;",
name="#ex#&nbspES:S264backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S264.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S266'](bbox);out+skel;",
name="#ex#&nbspES:S266forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S266.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S266'](bbox);out+skel;",
name="#ex#&nbspES:S266backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S266.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S266a'](bbox);out+skel;",
name="#ex#&nbspES:S266aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S266a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S266a'](bbox);out+skel;",
name="#ex#&nbspES:S266abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S266a.png"),
false

),

make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S300'](bbox);out+skel;",
name="#ex#&nbspES:S300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S300'](bbox);out+skel;",
name="#ex#&nbspES:S300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S301'](bbox);out+skel;",
name="#ex#&nbspES:S301forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S301.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S301'](bbox);out+skel;",
name="#ex#&nbspES:S301backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S301.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S31'](bbox);out+skel;",
name="#ex#&nbspES:S31forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S31.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S31'](bbox);out+skel;",
name="#ex#&nbspES:S31backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S31.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S310'](bbox);out+skel;",
name="#ex#&nbspES:S310forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S310.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S310'](bbox);out+skel;",
name="#ex#&nbspES:S310backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S310.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S32'](bbox);out+skel;",
name="#ex#&nbspES:S32forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S32.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S32'](bbox);out+skel;",
name="#ex#&nbspES:S32backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S32.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S320'](bbox);out+skel;",
name="#ex#&nbspES:S320forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S320.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S320'](bbox);out+skel;",
name="#ex#&nbspES:S320backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S320.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S321'](bbox);out+skel;",
name="#ex#&nbspES:S321forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S321.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S321'](bbox);out+skel;",
name="#ex#&nbspES:S321backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S321.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S322'](bbox);out+skel;",
name="#ex#&nbspES:S322forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S322.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S322'](bbox);out+skel;",
name="#ex#&nbspES:S322backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S322.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S33'](bbox);out+skel;",
name="#ex#&nbspES:S33forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S33.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S33'](bbox);out+skel;",
name="#ex#&nbspES:S33backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S33.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S34'](bbox);out+skel;",
name="#ex#&nbspES:S34forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S34.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S34'](bbox);out+skel;",
name="#ex#&nbspES:S34backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S34.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S341'](bbox);out+skel;",
name="#ex#&nbspES:S341forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S341.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S341'](bbox);out+skel;",
name="#ex#&nbspES:S341backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S341.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S342'](bbox);out+skel;",
name="#ex#&nbspES:S342forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S342.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S342'](bbox);out+skel;",
name="#ex#&nbspES:S342backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S342.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S344'](bbox);out+skel;",
name="#ex#&nbspES:S344forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S344.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S344'](bbox);out+skel;",
name="#ex#&nbspES:S344backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S344.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S347'](bbox);out+skel;",
name="#ex#&nbspES:S347forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S347.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S347'](bbox);out+skel;",
name="#ex#&nbspES:S347backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S347.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S34a'](bbox);out+skel;",
name="#ex#&nbspES:S34aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S34a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S34a'](bbox);out+skel;",
name="#ex#&nbspES:S34abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S34a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S350'](bbox);out+skel;",
name="#ex#&nbspES:S350forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S350.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S350'](bbox);out+skel;",
name="#ex#&nbspES:S350backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S350.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S351'](bbox);out+skel;",
name="#ex#&nbspES:S351forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S351.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S351'](bbox);out+skel;",
name="#ex#&nbspES:S351backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S351.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S354'](bbox);out+skel;",
name="#ex#&nbspES:S354forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S354.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S354'](bbox);out+skel;",
name="#ex#&nbspES:S354backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S354.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S355'](bbox);out+skel;",
name="#ex#&nbspES:S355forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S355.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S355'](bbox);out+skel;",
name="#ex#&nbspES:S355backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S355.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S360'](bbox);out+skel;",
name="#ex#&nbspES:S360forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S360.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S360'](bbox);out+skel;",
name="#ex#&nbspES:S360backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S360.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S362'](bbox);out+skel;",
name="#ex#&nbspES:S362forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S362.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S362'](bbox);out+skel;",
name="#ex#&nbspES:S362backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S362.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S366'](bbox);out+skel;",
name="#ex#&nbspES:S366forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S366.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S366'](bbox);out+skel;",
name="#ex#&nbspES:S366backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S366.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S368'](bbox);out+skel;",
name="#ex#&nbspES:S368forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S368.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S368'](bbox);out+skel;",
name="#ex#&nbspES:S368backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S368.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S373'](bbox);out+skel;",
name="#ex#&nbspES:S373forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S373.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S373'](bbox);out+skel;",
name="#ex#&nbspES:S373backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S373.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50a'](bbox);out+skel;",
name="#ex#&nbspES:S50aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50a'](bbox);out+skel;",
name="#ex#&nbspES:S50abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50a_50'](bbox);out+skel;",
name="#ex#&nbspES:S50a_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50a_50'](bbox);out+skel;",
name="#ex#&nbspES:S50a_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50a_60'](bbox);out+skel;",
name="#ex#&nbspES:S50a_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50a_60'](bbox);out+skel;",
name="#ex#&nbspES:S50a_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50a_70'](bbox);out+skel;",
name="#ex#&nbspES:S50a_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50a_70'](bbox);out+skel;",
name="#ex#&nbspES:S50a_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50a_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50b'](bbox);out+skel;",
name="#ex#&nbspES:S50bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50b'](bbox);out+skel;",
name="#ex#&nbspES:S50bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50b_60'](bbox);out+skel;",
name="#ex#&nbspES:S50b_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50b_60'](bbox);out+skel;",
name="#ex#&nbspES:S50b_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50b_70'](bbox);out+skel;",
name="#ex#&nbspES:S50b_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50b_70'](bbox);out+skel;",
name="#ex#&nbspES:S50b_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50b_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50c'](bbox);out+skel;",
name="#ex#&nbspES:S50cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50c'](bbox);out+skel;",
name="#ex#&nbspES:S50cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50d'](bbox);out+skel;",
name="#ex#&nbspES:S50dforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50d'](bbox);out+skel;",
name="#ex#&nbspES:S50dbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50d_50'](bbox);out+skel;",
name="#ex#&nbspES:S50d_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50d_50'](bbox);out+skel;",
name="#ex#&nbspES:S50d_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50d_60'](bbox);out+skel;",
name="#ex#&nbspES:S50d_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50d_60'](bbox);out+skel;",
name="#ex#&nbspES:S50d_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50d_70'](bbox);out+skel;",
name="#ex#&nbspES:S50d_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50d_70'](bbox);out+skel;",
name="#ex#&nbspES:S50d_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50d_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50e'](bbox);out+skel;",
name="#ex#&nbspES:S50eforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50e'](bbox);out+skel;",
name="#ex#&nbspES:S50ebackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50e_50'](bbox);out+skel;",
name="#ex#&nbspES:S50e_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50e_50'](bbox);out+skel;",
name="#ex#&nbspES:S50e_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50e_60'](bbox);out+skel;",
name="#ex#&nbspES:S50e_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50e_60'](bbox);out+skel;",
name="#ex#&nbspES:S50e_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S50e_70'](bbox);out+skel;",
name="#ex#&nbspES:S50e_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S50e_70'](bbox);out+skel;",
name="#ex#&nbspES:S50e_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S50e_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S51'](bbox);out+skel;",
name="#ex#&nbspES:S51forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S51.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S51'](bbox);out+skel;",
name="#ex#&nbspES:S51backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S51.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S510'](bbox);out+skel;",
name="#ex#&nbspES:S510forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S510.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S510'](bbox);out+skel;",
name="#ex#&nbspES:S510backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S510.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S52'](bbox);out+skel;",
name="#ex#&nbspES:S52forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S52'](bbox);out+skel;",
name="#ex#&nbspES:S52backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S520'](bbox);out+skel;",
name="#ex#&nbspES:S520forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S520.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S520'](bbox);out+skel;",
name="#ex#&nbspES:S520backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S520.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S52a'](bbox);out+skel;",
name="#ex#&nbspES:S52aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S52a'](bbox);out+skel;",
name="#ex#&nbspES:S52abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S52b'](bbox);out+skel;",
name="#ex#&nbspES:S52bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S52b'](bbox);out+skel;",
name="#ex#&nbspES:S52bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S52b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S53'](bbox);out+skel;",
name="#ex#&nbspES:S53forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S53'](bbox);out+skel;",
name="#ex#&nbspES:S53backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S53a'](bbox);out+skel;",
name="#ex#&nbspES:S53aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S53a'](bbox);out+skel;",
name="#ex#&nbspES:S53abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S53b'](bbox);out+skel;",
name="#ex#&nbspES:S53bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S53b'](bbox);out+skel;",
name="#ex#&nbspES:S53bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S53c'](bbox);out+skel;",
name="#ex#&nbspES:S53cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S53c'](bbox);out+skel;",
name="#ex#&nbspES:S53cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S53c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S540'](bbox);out+skel;",
name="#ex#&nbspES:S540forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S540.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S540'](bbox);out+skel;",
name="#ex#&nbspES:S540backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S540.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S550'](bbox);out+skel;",
name="#ex#&nbspES:S550forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S550.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S550'](bbox);out+skel;",
name="#ex#&nbspES:S550backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S550.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S560'](bbox);out+skel;",
name="#ex#&nbspES:S560forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S560.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S560'](bbox);out+skel;",
name="#ex#&nbspES:S560backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S560.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S570'](bbox);out+skel;",
name="#ex#&nbspES:S570forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S570.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S570'](bbox);out+skel;",
name="#ex#&nbspES:S570backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S570.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S570a'](bbox);out+skel;",
name="#ex#&nbspES:S570aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S570a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S570a'](bbox);out+skel;",
name="#ex#&nbspES:S570abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S570a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S571'](bbox);out+skel;",
name="#ex#&nbspES:S571forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S571.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S571'](bbox);out+skel;",
name="#ex#&nbspES:S571backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S571.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S572'](bbox);out+skel;",
name="#ex#&nbspES:S572forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S572.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S572'](bbox);out+skel;",
name="#ex#&nbspES:S572backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S572.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S573'](bbox);out+skel;",
name="#ex#&nbspES:S573forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S573.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S573'](bbox);out+skel;",
name="#ex#&nbspES:S573backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S573.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S574'](bbox);out+skel;",
name="#ex#&nbspES:S574forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S574'](bbox);out+skel;",
name="#ex#&nbspES:S574backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S574a'](bbox);out+skel;",
name="#ex#&nbspES:S574aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S574a'](bbox);out+skel;",
name="#ex#&nbspES:S574abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S574b'](bbox);out+skel;",
name="#ex#&nbspES:S574bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S574b'](bbox);out+skel;",
name="#ex#&nbspES:S574bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S574b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S575'](bbox);out+skel;",
name="#ex#&nbspES:S575forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S575.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S575'](bbox);out+skel;",
name="#ex#&nbspES:S575backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S575.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S600'](bbox);out+skel;",
name="#ex#&nbspES:S600forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S600.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S600'](bbox);out+skel;",
name="#ex#&nbspES:S600backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S600.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S602'](bbox);out+skel;",
name="#ex#&nbspES:S602forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S602.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S602'](bbox);out+skel;",
name="#ex#&nbspES:S602backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S602.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S60a'](bbox);out+skel;",
name="#ex#&nbspES:S60aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S60a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S60a'](bbox);out+skel;",
name="#ex#&nbspES:S60abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S60a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S60b'](bbox);out+skel;",
name="#ex#&nbspES:S60bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S60b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S60b'](bbox);out+skel;",
name="#ex#&nbspES:S60bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S60b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S610'](bbox);out+skel;",
name="#ex#&nbspES:S610forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S610.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S610'](bbox);out+skel;",
name="#ex#&nbspES:S610backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S610.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S61a'](bbox);out+skel;",
name="#ex#&nbspES:S61aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S61a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S61a'](bbox);out+skel;",
name="#ex#&nbspES:S61abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S61a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S61b'](bbox);out+skel;",
name="#ex#&nbspES:S61bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S61b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S61b'](bbox);out+skel;",
name="#ex#&nbspES:S61bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S61b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S62a'](bbox);out+skel;",
name="#ex#&nbspES:S62aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S62a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S62a'](bbox);out+skel;",
name="#ex#&nbspES:S62abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S62a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S62b'](bbox);out+skel;",
name="#ex#&nbspES:S62bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S62b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S62b'](bbox);out+skel;",
name="#ex#&nbspES:S62bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S62b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S63'](bbox);out+skel;",
name="#ex#&nbspES:S63forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S63.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S63'](bbox);out+skel;",
name="#ex#&nbspES:S63backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S63.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S64a'](bbox);out+skel;",
name="#ex#&nbspES:S64aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S64a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S64a'](bbox);out+skel;",
name="#ex#&nbspES:S64abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S64a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S64b'](bbox);out+skel;",
name="#ex#&nbspES:S64bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S64b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S64b'](bbox);out+skel;",
name="#ex#&nbspES:S64bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S64b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7'](bbox);out+skel;",
name="#ex#&nbspES:S7forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7'](bbox);out+skel;",
name="#ex#&nbspES:S7backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S700'](bbox);out+skel;",
name="#ex#&nbspES:S700forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S700.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S700'](bbox);out+skel;",
name="#ex#&nbspES:S700backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S700.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S710'](bbox);out+skel;",
name="#ex#&nbspES:S710forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S710.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S710'](bbox);out+skel;",
name="#ex#&nbspES:S710backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S710.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S720'](bbox);out+skel;",
name="#ex#&nbspES:S720forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S720.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S720'](bbox);out+skel;",
name="#ex#&nbspES:S720backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S720.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S730'](bbox);out+skel;",
name="#ex#&nbspES:S730forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S730.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S730'](bbox);out+skel;",
name="#ex#&nbspES:S730backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S730.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S740'](bbox);out+skel;",
name="#ex#&nbspES:S740forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S740.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S740'](bbox);out+skel;",
name="#ex#&nbspES:S740backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S740.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S750'](bbox);out+skel;",
name="#ex#&nbspES:S750forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S750.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S750'](bbox);out+skel;",
name="#ex#&nbspES:S750backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S750.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S760'](bbox);out+skel;",
name="#ex#&nbspES:S760forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S760.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S760'](bbox);out+skel;",
name="#ex#&nbspES:S760backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S760.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S770'](bbox);out+skel;",
name="#ex#&nbspES:S770forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S770.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S770'](bbox);out+skel;",
name="#ex#&nbspES:S770backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S770.png"),
false

),




			
			]);
	}	


	/*
	 * base Point Parameters:
	 * {
	 * 	strokeColor:"#FFFFFF",
	 * 	strokeOpacity:0.9,
	 * 	strokeWidth:3,
	 * 	pointRadius:3
	 * 	fillColor: "white",
	 * 	fillOpacity: 0.75,
	 * }
	 */
	function defaultPoint(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:0.75
		});
	}
	
		function defaultPoint2(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.5,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:0.5
		});
	}
	
		function defaultPoint3(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:1,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:0
		});
	}
	
		function defaultPoint4(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:7,
			fillColor:"white",
			fillOpacity:0
		});
	}
	
			function defaultPoint5(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:9,
			fillColor:"white",
			fillOpacity:0
		});
	}

	/*
	 * external Point Parameters:
	 * {
	 * 	externalGraphic: "path/to/icon.png",
	 * 	graphicWidth: 6,
	 * 	graphicHeight:6,
	 * 	graphicOpacity: 0.75,
	 * 	graphicXOffset: 0,
	 * 	graphicYOffset: 0,
	 * 	rotation: 0
	 * }
	 */
	function defaultExtPoint(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:16,
			graphicHeight:16,
			rotation:125
		});
	}
	
			function ts(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 0,
			graphicYOffset: 0,
			rotation:0
		});
	}
	
		function tsforward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 4,
			graphicYOffset: 0,
			rotation:0
		});
	}
	
		function tsbackward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: -4,
			graphicYOffset: 0,
			rotation:180
		});
	}
	
			function ts2forward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 4,
			graphicYOffset: 20,
			rotation:0
		});
	}
	
		function ts2backward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: -4,
			graphicYOffset: 20,
			rotation:180
		});
	}

}
	

function popuplinks(lonlat){

	  var thelink = "<div STYLE=\"margin:0px 0px 0px 0px;font-size: 8pt;\"><b>MAP</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\"><img src='img/osm.gif'>OSM</a>&nbsp&nbsp"
	  //COPIAR You can configure all services give you longitud and latitude and specific zoom in URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "zoomcode" target=\"_blank\"><img src='url icon'>Name of the service</a>&nbsp&nbsp";
	  //COPIAR Puedes configurar todo aquel servicio que te dé longitud (lonlat.lon) y latitud (lonla.lat) y un zoom concreto en la URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codigozoom" target=\"_blank\"><img src='url icono'>Nombre del servicio</a>&nbsp&nbsp";
	  //COPIAR Pots configurar tots aquells serveis que et donin longitud i latitud i un zoom concre a l'adreça URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codizoom" target=\"_blank\"><img src='url icona'>Nom del servei</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"https://maps.google.es/maps?ll=" + lonlat.lat + "," + lonlat.lon + "&t=h&z=17\" target=\"_blank\"><img src='img/google.gif'>Google</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.bing.com/maps/?v=2&cp=" + lonlat.lat + "~" + lonlat.lon + "&lvl=17&dir=0&sty=h&form=LMLTCC\" target=\"_blank\"><img src='img/bing.gif'>Bing</a><p>";
	  thelink = thelink + "<a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,normal"  + "\" target=\"_blank\"><img src='img/here.png'>Here</a><hr>";
	  thelink = thelink + "<b>SATELLITE</b><br><a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,satellite"  + "\" target=\"_blank\"><img src='img/digitalglobe.png'>DigitalGlobe</a>";
	  thelink = thelink + "<a href=\"https://www.google.es/maps/@" + lonlat.lat + "," + lonlat.lon + ",100m/data=!3m1!1e3\" target=\"_blank\"><img src='img/google.gif'>Google SAT</a><hr>&nbsp&nbsp";
	  thelink = thelink + "<b>STREET VIEW</b><br><a href=\"https://www.mapillary.com/app/?lat="  + (lonlat.lat) + "&lng=" + (lonlat.lon ) + "&z=15"  + "\" target=\"_blank\"><img src='img/mapillary.png'>Mapillary</a>";
	  thelink = thelink + "<a href=\"https://openstreetcam.org/map/@"  + (lonlat.lat) + "," + (lonlat.lon ) + ",17z"  + "\" target=\"_blank\"><img src='img/openstreetcam.png'>OpenStreetCam</a><hr>";
	   thelink = thelink + "<b>TRACKS</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=CD\" target=\"_blank\"><img src='img/osm.gif'>OSM Cycle Map</a>"
	  thelink = thelink + "<a href=\"http://hiking.waymarkedtrails.org/nl/?zoom=13" +  "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "\" target=\"_blank\"><img src='img/map_hiking.png'>Waymarked trails</a> ";
	  thelink = thelink + "<a href=\"https://www.wikiloc.com/wikiloc/map.do?lt=" + lonlat.lat + "&ln=" + lonlat.lon + "&z=17" + "\" target=\"_blank\"><img src='img/wikiloc.png'>Wikiloc</a><hr>";
	  thelink = thelink + "<b>TRANSPORT</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=TB\" target=\"_blank\"><img src='img/osm.gif'>OSM Public Transport</a>"
	  thelink = thelink + "<a href=\"http://www.xn--pnvkarte-m4a.de/#" + lonlat.lon + ";" + lonlat.lat + ";15" + "\" target=\"_blank\"><img src='img/opvnkarte.png'>Opvnkarte</a><hr> ";
	  
	  
	
	  var area = 0.04
	  var ctop = lonlat.lat + area;
	  var cbottom = ctop - (2 * area);
	  var cleft = lonlat.lon - area;
	  var cright = cleft + (2 * area); 
	  
	  thelink = thelink + "<b>Edit :</b><br><a href=\"http://localhost:8111/load_and_zoom?top=" + ctop + "&bottom=" + cbottom + "&left=" + cleft + "&right=" + cright + "\" target=\"josm_frame\">JOSM (necesitas conector)</a><br>";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=id&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Editor iD</a><br>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=potlatch2&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 2</a><br>&nbsp&nbsp";	
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 1</a><hr>";
	  
	  thelink = thelink + "<b>Errors OSM </b><br><a href=\"http://www.openstreetmap.org/#map=12" + "/" + lonlat.lat + "/" + lonlat.lon + "&layers=N" + "\" target=_blank> Notes OSM</a><br \>";
	  thelink = thelink + "<a href=\"http://keepright.ipax.at/report_map.php?" + "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=14&&layers=B0T&ch=0%2C50%2C191%2C195%2C201%2C205%2C206%2C311%2C312%2C313%2C402&show_ign=1&show_tmpign=1" + "\" target=_blank> Keepright</a><hr>"; 
	  thelink = thelink + "</b></div>";
	  return thelink;
	  
	}
