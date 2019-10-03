
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

	if (type == "trafficsigns"){
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
QURL + "?data=node['traffic_sign:backward'='ES:P1'](bbox);out+skel;",
name="#ex#&nbspES:P1 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:'](bbox);out+skel;",
name="#ex#&nbspES:forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:'](bbox);out+skel;",
name="#ex#&nbspES:backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B1a'](bbox);out+skel;",
name="#ex#&nbspES:B1aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B1a'](bbox);out+skel;",
name="#ex#&nbspES:B1abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B1b'](bbox);out+skel;",
name="#ex#&nbspES:B1bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B1b'](bbox);out+skel;",
name="#ex#&nbspES:B1bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B1b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2a'](bbox);out+skel;",
name="#ex#&nbspES:B2aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2a'](bbox);out+skel;",
name="#ex#&nbspES:B2abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2ar'](bbox);out+skel;",
name="#ex#&nbspES:B2arforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2ar.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2ar'](bbox);out+skel;",
name="#ex#&nbspES:B2arbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2ar.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2b'](bbox);out+skel;",
name="#ex#&nbspES:B2bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2b'](bbox);out+skel;",
name="#ex#&nbspES:B2bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2br'](bbox);out+skel;",
name="#ex#&nbspES:B2brforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2br.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2br'](bbox);out+skel;",
name="#ex#&nbspES:B2brbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2br.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2c'](bbox);out+skel;",
name="#ex#&nbspES:B2cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2c'](bbox);out+skel;",
name="#ex#&nbspES:B2cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2d'](bbox);out+skel;",
name="#ex#&nbspES:B2dforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2d'](bbox);out+skel;",
name="#ex#&nbspES:B2dbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B2e'](bbox);out+skel;",
name="#ex#&nbspES:B2eforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2e.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B2e'](bbox);out+skel;",
name="#ex#&nbspES:B2ebackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B2e.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B3a'](bbox);out+skel;",
name="#ex#&nbspES:B3aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3a'](bbox);out+skel;",
name="#ex#&nbspES:B3abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B3b'](bbox);out+skel;",
name="#ex#&nbspES:B3bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3b'](bbox);out+skel;",
name="#ex#&nbspES:B3bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B3c'](bbox);out+skel;",
name="#ex#&nbspES:B3cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3c'](bbox);out+skel;",
name="#ex#&nbspES:B3cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:B3d'](bbox);out+skel;",
name="#ex#&nbspES:B3dforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:B3d'](bbox);out+skel;",
name="#ex#&nbspES:B3dbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_B3d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:BE'](bbox);out+skel;",
name="#ex#&nbspES:BEforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BE.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:BE'](bbox);out+skel;",
name="#ex#&nbspES:BEbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BE.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:BS'](bbox);out+skel;",
name="#ex#&nbspES:BSforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BS.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:BS'](bbox);out+skel;",
name="#ex#&nbspES:BSbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_BS.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CajGrua'](bbox);out+skel;",
name="#ex#&nbspES:CajGruaforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CajGrua.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CajGrua'](bbox);out+skel;",
name="#ex#&nbspES:CajGruabackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CajGrua.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_com_s860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_com_s860forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_com_s860.svg"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_com_s860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_com_s860backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_com_s860.svg"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR10'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR10a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR10b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR10b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR10bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR10b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR21a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21a'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR21b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR21c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR21c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR21cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR21c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR24b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR24b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR24c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR24c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR24cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR24c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR32'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR32forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR32.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR32'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR32backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR32.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR51'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR51forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR51.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR51'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR51backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR51.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR61'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR61forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR61.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR61'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR61backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR61.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR62'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR62forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR62.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR62'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR62backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR62.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_OR63'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR63forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR63.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_OR63'](bbox);out+skel;",
name="#ex#&nbspES:CAT_OR63backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_OR63.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radarforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radarbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radarforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.svg"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_radar'](bbox);out+skel;",
name="#ex#&nbspES:CAT_radarbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_radar.svg"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S200'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S200b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S200c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S200c'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S200cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S200c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.svg"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S230'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S230backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S230.svg"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S270'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S270forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S270.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S270'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S270backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S270.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.svg"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S300'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S300.svg"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S351'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S351forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S351.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S351'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S351backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S351.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S520'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S520forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S520.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S520'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S520backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S520.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S600'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S600forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S600.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S600'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S600backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S600.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S700'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S700'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S700b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S700b'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S700bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S700b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:CAT_S860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S860forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S860.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:CAT_S860'](bbox);out+skel;",
name="#ex#&nbspES:CAT_S860backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_CAT_S860.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:com_traffic_sign_dir2'](bbox);out+skel;",
name="#ex#&nbspES:com_traffic_sign_dir2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_com_traffic_sign_dir2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:com_traffic_sign_dir2'](bbox);out+skel;",
name="#ex#&nbspES:com_traffic_sign_dir2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_com_traffic_sign_dir2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:FP21'](bbox);out+skel;",
name="#ex#&nbspES:FP21forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP21.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FP21'](bbox);out+skel;",
name="#ex#&nbspES:FP21backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP21.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:FP4'](bbox);out+skel;",
name="#ex#&nbspES:FP4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FP4'](bbox);out+skel;",
name="#ex#&nbspES:FP4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FP4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:FR101'](bbox);out+skel;",
name="#ex#&nbspES:FR101forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR101.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FR101'](bbox);out+skel;",
name="#ex#&nbspES:FR101backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR101.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:FR301'](bbox);out+skel;",
name="#ex#&nbspES:FR301forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR301.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:FR301'](bbox);out+skel;",
name="#ex#&nbspES:FR301backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_FR301.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:LEZ'](bbox);out+skel;",
name="#ex#&nbspES:LEZforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_LEZ.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:LEZ'](bbox);out+skel;",
name="#ex#&nbspES:LEZbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_LEZ.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:motorway'](bbox);out+skel;",
name="#ex#&nbspES:motorwayforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_motorway.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:motorway'](bbox);out+skel;",
name="#ex#&nbspES:motorwaybackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_motorway.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1'](bbox);out+skel;",
name="#ex#&nbspES:P1forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1'](bbox);out+skel;",
name="#ex#&nbspES:P1backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P10a'](bbox);out+skel;",
name="#ex#&nbspES:P10aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10a'](bbox);out+skel;",
name="#ex#&nbspES:P10abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P10b'](bbox);out+skel;",
name="#ex#&nbspES:P10bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10b'](bbox);out+skel;",
name="#ex#&nbspES:P10bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P10c'](bbox);out+skel;",
name="#ex#&nbspES:P10cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P10c'](bbox);out+skel;",
name="#ex#&nbspES:P10cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P10c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P11'](bbox);out+skel;",
name="#ex#&nbspES:P11forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P11'](bbox);out+skel;",
name="#ex#&nbspES:P11backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P11a'](bbox);out+skel;",
name="#ex#&nbspES:P11aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P11a'](bbox);out+skel;",
name="#ex#&nbspES:P11abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P11a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P12'](bbox);out+skel;",
name="#ex#&nbspES:P12forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P12.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P12'](bbox);out+skel;",
name="#ex#&nbspES:P12backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P12.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P13a'](bbox);out+skel;",
name="#ex#&nbspES:P13aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P13a'](bbox);out+skel;",
name="#ex#&nbspES:P13abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P13b'](bbox);out+skel;",
name="#ex#&nbspES:P13bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P13b'](bbox);out+skel;",
name="#ex#&nbspES:P13bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P14a'](bbox);out+skel;",
name="#ex#&nbspES:P14aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P14a'](bbox);out+skel;",
name="#ex#&nbspES:P14abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P14b'](bbox);out+skel;",
name="#ex#&nbspES:P14bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P14b'](bbox);out+skel;",
name="#ex#&nbspES:P14bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P15'](bbox);out+skel;",
name="#ex#&nbspES:P15forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15'](bbox);out+skel;",
name="#ex#&nbspES:P15backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P15a'](bbox);out+skel;",
name="#ex#&nbspES:P15aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15a'](bbox);out+skel;",
name="#ex#&nbspES:P15abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P15b'](bbox);out+skel;",
name="#ex#&nbspES:P15bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15b'](bbox);out+skel;",
name="#ex#&nbspES:P15bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a'](bbox);out+skel;",
name="#ex#&nbspES:P16aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a'](bbox);out+skel;",
name="#ex#&nbspES:P16abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_10'](bbox);out+skel;",
name="#ex#&nbspES:P16a_10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_10'](bbox);out+skel;",
name="#ex#&nbspES:P16a_10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_11'](bbox);out+skel;",
name="#ex#&nbspES:P16a_11forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_11.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_11'](bbox);out+skel;",
name="#ex#&nbspES:P16a_11backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_11.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_12'](bbox);out+skel;",
name="#ex#&nbspES:P16a_12forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_12.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_12'](bbox);out+skel;",
name="#ex#&nbspES:P16a_12backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_12.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_13'](bbox);out+skel;",
name="#ex#&nbspES:P16a_13forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_13.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_13'](bbox);out+skel;",
name="#ex#&nbspES:P16a_13backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_13.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_15'](bbox);out+skel;",
name="#ex#&nbspES:P16a_15forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_15.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_15'](bbox);out+skel;",
name="#ex#&nbspES:P16a_15backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_15.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_17'](bbox);out+skel;",
name="#ex#&nbspES:P16a_17forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_17.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_17'](bbox);out+skel;",
name="#ex#&nbspES:P16a_17backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_17.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_20'](bbox);out+skel;",
name="#ex#&nbspES:P16a_20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_20'](bbox);out+skel;",
name="#ex#&nbspES:P16a_20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_4'](bbox);out+skel;",
name="#ex#&nbspES:P16a_4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_4'](bbox);out+skel;",
name="#ex#&nbspES:P16a_4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_5'](bbox);out+skel;",
name="#ex#&nbspES:P16a_5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_5'](bbox);out+skel;",
name="#ex#&nbspES:P16a_5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_6'](bbox);out+skel;",
name="#ex#&nbspES:P16a_6forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_6'](bbox);out+skel;",
name="#ex#&nbspES:P16a_6backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_7'](bbox);out+skel;",
name="#ex#&nbspES:P16a_7forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_7'](bbox);out+skel;",
name="#ex#&nbspES:P16a_7backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_75'](bbox);out+skel;",
name="#ex#&nbspES:P16a_75forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_75.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_75'](bbox);out+skel;",
name="#ex#&nbspES:P16a_75backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_75.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_8'](bbox);out+skel;",
name="#ex#&nbspES:P16a_8forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_8.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_8'](bbox);out+skel;",
name="#ex#&nbspES:P16a_8backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_8.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16a_9'](bbox);out+skel;",
name="#ex#&nbspES:P16a_9forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_9.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16a_9'](bbox);out+skel;",
name="#ex#&nbspES:P16a_9backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16a_9.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b'](bbox);out+skel;",
name="#ex#&nbspES:P16bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b'](bbox);out+skel;",
name="#ex#&nbspES:P16bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_001'](bbox);out+skel;",
name="#ex#&nbspES:P16b_001forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_001.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_001'](bbox);out+skel;",
name="#ex#&nbspES:P16b_001backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_001.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_10'](bbox);out+skel;",
name="#ex#&nbspES:P16b_10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_10'](bbox);out+skel;",
name="#ex#&nbspES:P16b_10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_12'](bbox);out+skel;",
name="#ex#&nbspES:P16b_12forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_12.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_12'](bbox);out+skel;",
name="#ex#&nbspES:P16b_12backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_12.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_13'](bbox);out+skel;",
name="#ex#&nbspES:P16b_13forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_13.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_13'](bbox);out+skel;",
name="#ex#&nbspES:P16b_13backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_13.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_15'](bbox);out+skel;",
name="#ex#&nbspES:P16b_15forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_15.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_15'](bbox);out+skel;",
name="#ex#&nbspES:P16b_15backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_15.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_17'](bbox);out+skel;",
name="#ex#&nbspES:P16b_17forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_17.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_17'](bbox);out+skel;",
name="#ex#&nbspES:P16b_17backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_17.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_20'](bbox);out+skel;",
name="#ex#&nbspES:P16b_20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_20'](bbox);out+skel;",
name="#ex#&nbspES:P16b_20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_5'](bbox);out+skel;",
name="#ex#&nbspES:P16b_5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_5'](bbox);out+skel;",
name="#ex#&nbspES:P16b_5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_6'](bbox);out+skel;",
name="#ex#&nbspES:P16b_6forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_6'](bbox);out+skel;",
name="#ex#&nbspES:P16b_6backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_7'](bbox);out+skel;",
name="#ex#&nbspES:P16b_7forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_7'](bbox);out+skel;",
name="#ex#&nbspES:P16b_7backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_75'](bbox);out+skel;",
name="#ex#&nbspES:P16b_75forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_75.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_75'](bbox);out+skel;",
name="#ex#&nbspES:P16b_75backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_75.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_8'](bbox);out+skel;",
name="#ex#&nbspES:P16b_8forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_8.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_8'](bbox);out+skel;",
name="#ex#&nbspES:P16b_8backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_8.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P16b_9'](bbox);out+skel;",
name="#ex#&nbspES:P16b_9forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_9.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P16b_9'](bbox);out+skel;",
name="#ex#&nbspES:P16b_9backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P16b_9.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P17'](bbox);out+skel;",
name="#ex#&nbspES:P17forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17'](bbox);out+skel;",
name="#ex#&nbspES:P17backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P17a'](bbox);out+skel;",
name="#ex#&nbspES:P17aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17a'](bbox);out+skel;",
name="#ex#&nbspES:P17abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P17b'](bbox);out+skel;",
name="#ex#&nbspES:P17bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P17b'](bbox);out+skel;",
name="#ex#&nbspES:P17bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P17b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P19'](bbox);out+skel;",
name="#ex#&nbspES:P19forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P19.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P19'](bbox);out+skel;",
name="#ex#&nbspES:P19backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P19.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1a'](bbox);out+skel;",
name="#ex#&nbspES:P1aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1a'](bbox);out+skel;",
name="#ex#&nbspES:P1abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1b'](bbox);out+skel;",
name="#ex#&nbspES:P1bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1b'](bbox);out+skel;",
name="#ex#&nbspES:P1bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1c'](bbox);out+skel;",
name="#ex#&nbspES:P1cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1c'](bbox);out+skel;",
name="#ex#&nbspES:P1cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1d'](bbox);out+skel;",
name="#ex#&nbspES:P1dforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1d'](bbox);out+skel;",
name="#ex#&nbspES:P1dbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P2'](bbox);out+skel;",
name="#ex#&nbspES:P2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P2'](bbox);out+skel;",
name="#ex#&nbspES:P2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P20'](bbox);out+skel;",
name="#ex#&nbspES:P20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20'](bbox);out+skel;",
name="#ex#&nbspES:P20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P20a'](bbox);out+skel;",
name="#ex#&nbspES:P20aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20a'](bbox);out+skel;",
name="#ex#&nbspES:P20abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P20aP'](bbox);out+skel;",
name="#ex#&nbspES:P20aPforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20aP.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20aP'](bbox);out+skel;",
name="#ex#&nbspES:P20aPbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20aP.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P21'](bbox);out+skel;",
name="#ex#&nbspES:P21forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P21.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P21'](bbox);out+skel;",
name="#ex#&nbspES:P21backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P21.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P22'](bbox);out+skel;",
name="#ex#&nbspES:P22forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P22.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P22'](bbox);out+skel;",
name="#ex#&nbspES:P22backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P22.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P23'](bbox);out+skel;",
name="#ex#&nbspES:P23forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P23.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P23'](bbox);out+skel;",
name="#ex#&nbspES:P23backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P23.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P24'](bbox);out+skel;",
name="#ex#&nbspES:P24forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P24.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P24'](bbox);out+skel;",
name="#ex#&nbspES:P24backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P24.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P25'](bbox);out+skel;",
name="#ex#&nbspES:P25forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P25.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P25'](bbox);out+skel;",
name="#ex#&nbspES:P25backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P25.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P26'](bbox);out+skel;",
name="#ex#&nbspES:P26forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P26.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P26'](bbox);out+skel;",
name="#ex#&nbspES:P26backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P26.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P27'](bbox);out+skel;",
name="#ex#&nbspES:P27forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P27.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P27'](bbox);out+skel;",
name="#ex#&nbspES:P27backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P27.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P28'](bbox);out+skel;",
name="#ex#&nbspES:P28forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P28.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P28'](bbox);out+skel;",
name="#ex#&nbspES:P28backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P28.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P29'](bbox);out+skel;",
name="#ex#&nbspES:P29forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P29.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P29'](bbox);out+skel;",
name="#ex#&nbspES:P29backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P29.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P3'](bbox);out+skel;",
name="#ex#&nbspES:P3forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P3'](bbox);out+skel;",
name="#ex#&nbspES:P3backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P30'](bbox);out+skel;",
name="#ex#&nbspES:P30forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P30'](bbox);out+skel;",
name="#ex#&nbspES:P30backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P31'](bbox);out+skel;",
name="#ex#&nbspES:P31forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P31.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P31'](bbox);out+skel;",
name="#ex#&nbspES:P31backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P31.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P32'](bbox);out+skel;",
name="#ex#&nbspES:P32forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P32.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P32'](bbox);out+skel;",
name="#ex#&nbspES:P32backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P32.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P33'](bbox);out+skel;",
name="#ex#&nbspES:P33forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P33.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P33'](bbox);out+skel;",
name="#ex#&nbspES:P33backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P33.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P34'](bbox);out+skel;",
name="#ex#&nbspES:P34forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P34.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P34'](bbox);out+skel;",
name="#ex#&nbspES:P34backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P34.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P4'](bbox);out+skel;",
name="#ex#&nbspES:P4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P4'](bbox);out+skel;",
name="#ex#&nbspES:P4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P5'](bbox);out+skel;",
name="#ex#&nbspES:P5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P5'](bbox);out+skel;",
name="#ex#&nbspES:P5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P50'](bbox);out+skel;",
name="#ex#&nbspES:P50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P50'](bbox);out+skel;",
name="#ex#&nbspES:P50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P6'](bbox);out+skel;",
name="#ex#&nbspES:P6forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P6'](bbox);out+skel;",
name="#ex#&nbspES:P6backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P7'](bbox);out+skel;",
name="#ex#&nbspES:P7forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P7'](bbox);out+skel;",
name="#ex#&nbspES:P7backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P8'](bbox);out+skel;",
name="#ex#&nbspES:P8forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P8.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P8'](bbox);out+skel;",
name="#ex#&nbspES:P8backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P8.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P9a'](bbox);out+skel;",
name="#ex#&nbspES:P9aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9a'](bbox);out+skel;",
name="#ex#&nbspES:P9abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P9b'](bbox);out+skel;",
name="#ex#&nbspES:P9bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9b'](bbox);out+skel;",
name="#ex#&nbspES:P9bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P9c'](bbox);out+skel;",
name="#ex#&nbspES:P9cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P9c'](bbox);out+skel;",
name="#ex#&nbspES:P9cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P9c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:primary'](bbox);out+skel;",
name="#ex#&nbspES:primaryforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_primary.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:primary'](bbox);out+skel;",
name="#ex#&nbspES:primarybackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_primary.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R1'](bbox);out+skel;",
name="#ex#&nbspES:R1forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R1'](bbox);out+skel;",
name="#ex#&nbspES:R1backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R100'](bbox);out+skel;",
name="#ex#&nbspES:R100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R100'](bbox);out+skel;",
name="#ex#&nbspES:R100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R101'](bbox);out+skel;",
name="#ex#&nbspES:R101forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R101.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R101'](bbox);out+skel;",
name="#ex#&nbspES:R101backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R101.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R102'](bbox);out+skel;",
name="#ex#&nbspES:R102forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R102.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R102'](bbox);out+skel;",
name="#ex#&nbspES:R102backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R102.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R103'](bbox);out+skel;",
name="#ex#&nbspES:R103forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R103.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R103'](bbox);out+skel;",
name="#ex#&nbspES:R103backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R103.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R104'](bbox);out+skel;",
name="#ex#&nbspES:R104forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R104.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R104'](bbox);out+skel;",
name="#ex#&nbspES:R104backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R104.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R105'](bbox);out+skel;",
name="#ex#&nbspES:R105forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R105.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R105'](bbox);out+skel;",
name="#ex#&nbspES:R105backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R105.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R106'](bbox);out+skel;",
name="#ex#&nbspES:R106forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R106.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R106'](bbox);out+skel;",
name="#ex#&nbspES:R106backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R106.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107'](bbox);out+skel;",
name="#ex#&nbspES:R107forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107'](bbox);out+skel;",
name="#ex#&nbspES:R107backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_10'](bbox);out+skel;",
name="#ex#&nbspES:R107_10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_10'](bbox);out+skel;",
name="#ex#&nbspES:R107_10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_12'](bbox);out+skel;",
name="#ex#&nbspES:R107_12forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_12.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_12'](bbox);out+skel;",
name="#ex#&nbspES:R107_12backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_12.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_16'](bbox);out+skel;",
name="#ex#&nbspES:R107_16forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_16.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_16'](bbox);out+skel;",
name="#ex#&nbspES:R107_16backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_16.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_18'](bbox);out+skel;",
name="#ex#&nbspES:R107_18forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_18.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_18'](bbox);out+skel;",
name="#ex#&nbspES:R107_18backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_18.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_2'](bbox);out+skel;",
name="#ex#&nbspES:R107_2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_2'](bbox);out+skel;",
name="#ex#&nbspES:R107_2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_25'](bbox);out+skel;",
name="#ex#&nbspES:R107_25forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_25.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_25'](bbox);out+skel;",
name="#ex#&nbspES:R107_25backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_25.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_3'](bbox);out+skel;",
name="#ex#&nbspES:R107_3forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_3'](bbox);out+skel;",
name="#ex#&nbspES:R107_3backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_35'](bbox);out+skel;",
name="#ex#&nbspES:R107_35forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_35.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_35'](bbox);out+skel;",
name="#ex#&nbspES:R107_35backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_35.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_4'](bbox);out+skel;",
name="#ex#&nbspES:R107_4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_4'](bbox);out+skel;",
name="#ex#&nbspES:R107_4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_45'](bbox);out+skel;",
name="#ex#&nbspES:R107_45forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_45.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_45'](bbox);out+skel;",
name="#ex#&nbspES:R107_45backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_45.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_5'](bbox);out+skel;",
name="#ex#&nbspES:R107_5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_5'](bbox);out+skel;",
name="#ex#&nbspES:R107_5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_55'](bbox);out+skel;",
name="#ex#&nbspES:R107_55forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_55.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_55'](bbox);out+skel;",
name="#ex#&nbspES:R107_55backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_55.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_6'](bbox);out+skel;",
name="#ex#&nbspES:R107_6forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_6'](bbox);out+skel;",
name="#ex#&nbspES:R107_6backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_65'](bbox);out+skel;",
name="#ex#&nbspES:R107_65forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_65.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_65'](bbox);out+skel;",
name="#ex#&nbspES:R107_65backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_65.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_7'](bbox);out+skel;",
name="#ex#&nbspES:R107_7forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_7'](bbox);out+skel;",
name="#ex#&nbspES:R107_7backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_75'](bbox);out+skel;",
name="#ex#&nbspES:R107_75forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_75.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_75'](bbox);out+skel;",
name="#ex#&nbspES:R107_75backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_75.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_8'](bbox);out+skel;",
name="#ex#&nbspES:R107_8forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_8.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_8'](bbox);out+skel;",
name="#ex#&nbspES:R107_8backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_8.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_85'](bbox);out+skel;",
name="#ex#&nbspES:R107_85forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_85.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_85'](bbox);out+skel;",
name="#ex#&nbspES:R107_85backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_85.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_9'](bbox);out+skel;",
name="#ex#&nbspES:R107_9forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_9.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_9'](bbox);out+skel;",
name="#ex#&nbspES:R107_9backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_9.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R107_95'](bbox);out+skel;",
name="#ex#&nbspES:R107_95forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_95.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R107_95'](bbox);out+skel;",
name="#ex#&nbspES:R107_95backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R107_95.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R108'](bbox);out+skel;",
name="#ex#&nbspES:R108forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R108.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R108'](bbox);out+skel;",
name="#ex#&nbspES:R108backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R108.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R109'](bbox);out+skel;",
name="#ex#&nbspES:R109forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R109.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R109'](bbox);out+skel;",
name="#ex#&nbspES:R109backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R109.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R110'](bbox);out+skel;",
name="#ex#&nbspES:R110forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R110.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R110'](bbox);out+skel;",
name="#ex#&nbspES:R110backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R110.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R111'](bbox);out+skel;",
name="#ex#&nbspES:R111forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R111.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R111'](bbox);out+skel;",
name="#ex#&nbspES:R111backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R111.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R112'](bbox);out+skel;",
name="#ex#&nbspES:R112forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R112.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R112'](bbox);out+skel;",
name="#ex#&nbspES:R112backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R112.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R113'](bbox);out+skel;",
name="#ex#&nbspES:R113forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R113.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R113'](bbox);out+skel;",
name="#ex#&nbspES:R113backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R113.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R114'](bbox);out+skel;",
name="#ex#&nbspES:R114forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R114.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R114'](bbox);out+skel;",
name="#ex#&nbspES:R114backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R114.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R115'](bbox);out+skel;",
name="#ex#&nbspES:R115forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R115.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R115'](bbox);out+skel;",
name="#ex#&nbspES:R115backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R115.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R116'](bbox);out+skel;",
name="#ex#&nbspES:R116forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R116.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R116'](bbox);out+skel;",
name="#ex#&nbspES:R116backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R116.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R117'](bbox);out+skel;",
name="#ex#&nbspES:R117forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R117.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R117'](bbox);out+skel;",
name="#ex#&nbspES:R117backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R117.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R2'](bbox);out+skel;",
name="#ex#&nbspES:R2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R2'](bbox);out+skel;",
name="#ex#&nbspES:R2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R200'](bbox);out+skel;",
name="#ex#&nbspES:R200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R200'](bbox);out+skel;",
name="#ex#&nbspES:R200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R200a'](bbox);out+skel;",
name="#ex#&nbspES:R200aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R200a'](bbox);out+skel;",
name="#ex#&nbspES:R200abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R200a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201'](bbox);out+skel;",
name="#ex#&nbspES:R201forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201'](bbox);out+skel;",
name="#ex#&nbspES:R201backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_10'](bbox);out+skel;",
name="#ex#&nbspES:R201_10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_10'](bbox);out+skel;",
name="#ex#&nbspES:R201_10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_11'](bbox);out+skel;",
name="#ex#&nbspES:R201_11forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_11.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_11'](bbox);out+skel;",
name="#ex#&nbspES:R201_11backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_11.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_12'](bbox);out+skel;",
name="#ex#&nbspES:R201_12forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_12.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_12'](bbox);out+skel;",
name="#ex#&nbspES:R201_12backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_12.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_14'](bbox);out+skel;",
name="#ex#&nbspES:R201_14forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_14.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_14'](bbox);out+skel;",
name="#ex#&nbspES:R201_14backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_14.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_15'](bbox);out+skel;",
name="#ex#&nbspES:R201_15forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_15.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_15'](bbox);out+skel;",
name="#ex#&nbspES:R201_15backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_15.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_150'](bbox);out+skel;",
name="#ex#&nbspES:R201_150forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_150.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_150'](bbox);out+skel;",
name="#ex#&nbspES:R201_150backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_150.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_16'](bbox);out+skel;",
name="#ex#&nbspES:R201_16forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_16.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_16'](bbox);out+skel;",
name="#ex#&nbspES:R201_16backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_16.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_17'](bbox);out+skel;",
name="#ex#&nbspES:R201_17forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_17.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_17'](bbox);out+skel;",
name="#ex#&nbspES:R201_17backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_17.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_20'](bbox);out+skel;",
name="#ex#&nbspES:R201_20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_20'](bbox);out+skel;",
name="#ex#&nbspES:R201_20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_24'](bbox);out+skel;",
name="#ex#&nbspES:R201_24forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_24.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_24'](bbox);out+skel;",
name="#ex#&nbspES:R201_24backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_24.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_29'](bbox);out+skel;",
name="#ex#&nbspES:R201_29forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_29.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_29'](bbox);out+skel;",
name="#ex#&nbspES:R201_29backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_29.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_3'](bbox);out+skel;",
name="#ex#&nbspES:R201_3forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_3'](bbox);out+skel;",
name="#ex#&nbspES:R201_3backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_35'](bbox);out+skel;",
name="#ex#&nbspES:R201_35forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_35.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_35'](bbox);out+skel;",
name="#ex#&nbspES:R201_35backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_35.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_38'](bbox);out+skel;",
name="#ex#&nbspES:R201_38forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_38.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_38'](bbox);out+skel;",
name="#ex#&nbspES:R201_38backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_38.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_4'](bbox);out+skel;",
name="#ex#&nbspES:R201_4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_4'](bbox);out+skel;",
name="#ex#&nbspES:R201_4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_5'](bbox);out+skel;",
name="#ex#&nbspES:R201_5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_5'](bbox);out+skel;",
name="#ex#&nbspES:R201_5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_55'](bbox);out+skel;",
name="#ex#&nbspES:R201_55forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_55.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_55'](bbox);out+skel;",
name="#ex#&nbspES:R201_55backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_55.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_6'](bbox);out+skel;",
name="#ex#&nbspES:R201_6forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_6'](bbox);out+skel;",
name="#ex#&nbspES:R201_6backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_65'](bbox);out+skel;",
name="#ex#&nbspES:R201_65forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_65.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_65'](bbox);out+skel;",
name="#ex#&nbspES:R201_65backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_65.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_75'](bbox);out+skel;",
name="#ex#&nbspES:R201_75forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_75.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_75'](bbox);out+skel;",
name="#ex#&nbspES:R201_75backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_75.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R201_8'](bbox);out+skel;",
name="#ex#&nbspES:R201_8forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_8.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R201_8'](bbox);out+skel;",
name="#ex#&nbspES:R201_8backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R201_8.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202'](bbox);out+skel;",
name="#ex#&nbspES:R202forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202'](bbox);out+skel;",
name="#ex#&nbspES:R202backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_10'](bbox);out+skel;",
name="#ex#&nbspES:R202_10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_10'](bbox);out+skel;",
name="#ex#&nbspES:R202_10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_2'](bbox);out+skel;",
name="#ex#&nbspES:R202_2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_2'](bbox);out+skel;",
name="#ex#&nbspES:R202_2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_24'](bbox);out+skel;",
name="#ex#&nbspES:R202_24forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_24.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_24'](bbox);out+skel;",
name="#ex#&nbspES:R202_24backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_24.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_5'](bbox);out+skel;",
name="#ex#&nbspES:R202_5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_5'](bbox);out+skel;",
name="#ex#&nbspES:R202_5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R202_7'](bbox);out+skel;",
name="#ex#&nbspES:R202_7forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R202_7'](bbox);out+skel;",
name="#ex#&nbspES:R202_7backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R202_7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R203'](bbox);out+skel;",
name="#ex#&nbspES:R203forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203'](bbox);out+skel;",
name="#ex#&nbspES:R203backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R203_10'](bbox);out+skel;",
name="#ex#&nbspES:R203_10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203_10'](bbox);out+skel;",
name="#ex#&nbspES:R203_10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R203_7'](bbox);out+skel;",
name="#ex#&nbspES:R203_7forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_7.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R203_7'](bbox);out+skel;",
name="#ex#&nbspES:R203_7backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R203_7.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204'](bbox);out+skel;",
name="#ex#&nbspES:R204forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204'](bbox);out+skel;",
name="#ex#&nbspES:R204backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_2'](bbox);out+skel;",
name="#ex#&nbspES:R204_2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_2'](bbox);out+skel;",
name="#ex#&nbspES:R204_2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_21'](bbox);out+skel;",
name="#ex#&nbspES:R204_21forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_21.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_21'](bbox);out+skel;",
name="#ex#&nbspES:R204_21backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_21.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_22'](bbox);out+skel;",
name="#ex#&nbspES:R204_22forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_22.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_22'](bbox);out+skel;",
name="#ex#&nbspES:R204_22backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_22.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_23'](bbox);out+skel;",
name="#ex#&nbspES:R204_23forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_23.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_23'](bbox);out+skel;",
name="#ex#&nbspES:R204_23backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_23.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_25'](bbox);out+skel;",
name="#ex#&nbspES:R204_25forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_25.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_25'](bbox);out+skel;",
name="#ex#&nbspES:R204_25backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_25.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_3'](bbox);out+skel;",
name="#ex#&nbspES:R204_3forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_3'](bbox);out+skel;",
name="#ex#&nbspES:R204_3backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_32'](bbox);out+skel;",
name="#ex#&nbspES:R204_32forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_32.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_32'](bbox);out+skel;",
name="#ex#&nbspES:R204_32backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_32.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_34'](bbox);out+skel;",
name="#ex#&nbspES:R204_34forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_34.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_34'](bbox);out+skel;",
name="#ex#&nbspES:R204_34backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_34.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_35'](bbox);out+skel;",
name="#ex#&nbspES:R204_35forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_35.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_35'](bbox);out+skel;",
name="#ex#&nbspES:R204_35backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_35.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_36'](bbox);out+skel;",
name="#ex#&nbspES:R204_36forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_36.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_36'](bbox);out+skel;",
name="#ex#&nbspES:R204_36backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_36.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_37'](bbox);out+skel;",
name="#ex#&nbspES:R204_37forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_37.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_37'](bbox);out+skel;",
name="#ex#&nbspES:R204_37backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_37.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_38'](bbox);out+skel;",
name="#ex#&nbspES:R204_38forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_38.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_38'](bbox);out+skel;",
name="#ex#&nbspES:R204_38backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_38.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_4'](bbox);out+skel;",
name="#ex#&nbspES:R204_4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_4'](bbox);out+skel;",
name="#ex#&nbspES:R204_4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_41'](bbox);out+skel;",
name="#ex#&nbspES:R204_41forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_41.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_41'](bbox);out+skel;",
name="#ex#&nbspES:R204_41backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_41.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_43'](bbox);out+skel;",
name="#ex#&nbspES:R204_43forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_43.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_43'](bbox);out+skel;",
name="#ex#&nbspES:R204_43backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_43.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R204_45'](bbox);out+skel;",
name="#ex#&nbspES:R204_45forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_45.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R204_45'](bbox);out+skel;",
name="#ex#&nbspES:R204_45backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R204_45.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205'](bbox);out+skel;",
name="#ex#&nbspES:R205forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205'](bbox);out+skel;",
name="#ex#&nbspES:R205backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_2'](bbox);out+skel;",
name="#ex#&nbspES:R205_2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_2'](bbox);out+skel;",
name="#ex#&nbspES:R205_2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_21'](bbox);out+skel;",
name="#ex#&nbspES:R205_21forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_21.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_21'](bbox);out+skel;",
name="#ex#&nbspES:R205_21backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_21.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_22'](bbox);out+skel;",
name="#ex#&nbspES:R205_22forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_22.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_22'](bbox);out+skel;",
name="#ex#&nbspES:R205_22backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_22.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_23'](bbox);out+skel;",
name="#ex#&nbspES:R205_23forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_23.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_23'](bbox);out+skel;",
name="#ex#&nbspES:R205_23backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_23.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_24'](bbox);out+skel;",
name="#ex#&nbspES:R205_24forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_24.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_24'](bbox);out+skel;",
name="#ex#&nbspES:R205_24backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_24.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_25'](bbox);out+skel;",
name="#ex#&nbspES:R205_25forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_25.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_25'](bbox);out+skel;",
name="#ex#&nbspES:R205_25backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_25.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_26'](bbox);out+skel;",
name="#ex#&nbspES:R205_26forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_26.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_26'](bbox);out+skel;",
name="#ex#&nbspES:R205_26backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_26.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_27'](bbox);out+skel;",
name="#ex#&nbspES:R205_27forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_27.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_27'](bbox);out+skel;",
name="#ex#&nbspES:R205_27backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_27.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_28'](bbox);out+skel;",
name="#ex#&nbspES:R205_28forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_28.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_28'](bbox);out+skel;",
name="#ex#&nbspES:R205_28backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_28.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_29'](bbox);out+skel;",
name="#ex#&nbspES:R205_29forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_29.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_29'](bbox);out+skel;",
name="#ex#&nbspES:R205_29backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_29.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_3'](bbox);out+skel;",
name="#ex#&nbspES:R205_3forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_3'](bbox);out+skel;",
name="#ex#&nbspES:R205_3backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_31'](bbox);out+skel;",
name="#ex#&nbspES:R205_31forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_31.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_31'](bbox);out+skel;",
name="#ex#&nbspES:R205_31backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_31.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_32'](bbox);out+skel;",
name="#ex#&nbspES:R205_32forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_32.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_32'](bbox);out+skel;",
name="#ex#&nbspES:R205_32backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_32.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_33'](bbox);out+skel;",
name="#ex#&nbspES:R205_33forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_33.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_33'](bbox);out+skel;",
name="#ex#&nbspES:R205_33backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_33.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_34'](bbox);out+skel;",
name="#ex#&nbspES:R205_34forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_34.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_34'](bbox);out+skel;",
name="#ex#&nbspES:R205_34backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_34.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_35'](bbox);out+skel;",
name="#ex#&nbspES:R205_35forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_35.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_35'](bbox);out+skel;",
name="#ex#&nbspES:R205_35backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_35.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_36'](bbox);out+skel;",
name="#ex#&nbspES:R205_36forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_36.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_36'](bbox);out+skel;",
name="#ex#&nbspES:R205_36backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_36.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_37'](bbox);out+skel;",
name="#ex#&nbspES:R205_37forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_37.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_37'](bbox);out+skel;",
name="#ex#&nbspES:R205_37backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_37.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_38'](bbox);out+skel;",
name="#ex#&nbspES:R205_38forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_38.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_38'](bbox);out+skel;",
name="#ex#&nbspES:R205_38backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_38.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_39'](bbox);out+skel;",
name="#ex#&nbspES:R205_39forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_39.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_39'](bbox);out+skel;",
name="#ex#&nbspES:R205_39backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_39.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_4'](bbox);out+skel;",
name="#ex#&nbspES:R205_4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_4'](bbox);out+skel;",
name="#ex#&nbspES:R205_4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_41'](bbox);out+skel;",
name="#ex#&nbspES:R205_41forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_41.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_41'](bbox);out+skel;",
name="#ex#&nbspES:R205_41backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_41.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_42'](bbox);out+skel;",
name="#ex#&nbspES:R205_42forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_42.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_42'](bbox);out+skel;",
name="#ex#&nbspES:R205_42backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_42.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_43'](bbox);out+skel;",
name="#ex#&nbspES:R205_43forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_43.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_43'](bbox);out+skel;",
name="#ex#&nbspES:R205_43backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_43.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_44'](bbox);out+skel;",
name="#ex#&nbspES:R205_44forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_44.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_44'](bbox);out+skel;",
name="#ex#&nbspES:R205_44backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_44.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_45'](bbox);out+skel;",
name="#ex#&nbspES:R205_45forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_45.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_45'](bbox);out+skel;",
name="#ex#&nbspES:R205_45backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_45.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_46'](bbox);out+skel;",
name="#ex#&nbspES:R205_46forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_46.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_46'](bbox);out+skel;",
name="#ex#&nbspES:R205_46backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_46.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_47'](bbox);out+skel;",
name="#ex#&nbspES:R205_47forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_47.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_47'](bbox);out+skel;",
name="#ex#&nbspES:R205_47backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_47.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_48'](bbox);out+skel;",
name="#ex#&nbspES:R205_48forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_48.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_48'](bbox);out+skel;",
name="#ex#&nbspES:R205_48backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_48.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_49'](bbox);out+skel;",
name="#ex#&nbspES:R205_49forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_49.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_49'](bbox);out+skel;",
name="#ex#&nbspES:R205_49backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_49.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_5'](bbox);out+skel;",
name="#ex#&nbspES:R205_5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_5'](bbox);out+skel;",
name="#ex#&nbspES:R205_5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_51'](bbox);out+skel;",
name="#ex#&nbspES:R205_51forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_51.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_51'](bbox);out+skel;",
name="#ex#&nbspES:R205_51backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_51.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_52'](bbox);out+skel;",
name="#ex#&nbspES:R205_52forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_52.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_52'](bbox);out+skel;",
name="#ex#&nbspES:R205_52backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_52.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_53'](bbox);out+skel;",
name="#ex#&nbspES:R205_53forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_53.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_53'](bbox);out+skel;",
name="#ex#&nbspES:R205_53backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_53.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_54'](bbox);out+skel;",
name="#ex#&nbspES:R205_54forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_54.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_54'](bbox);out+skel;",
name="#ex#&nbspES:R205_54backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_54.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_56'](bbox);out+skel;",
name="#ex#&nbspES:R205_56forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_56.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_56'](bbox);out+skel;",
name="#ex#&nbspES:R205_56backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_56.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_59'](bbox);out+skel;",
name="#ex#&nbspES:R205_59forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_59.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_59'](bbox);out+skel;",
name="#ex#&nbspES:R205_59backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_59.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R205_6'](bbox);out+skel;",
name="#ex#&nbspES:R205_6forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R205_6'](bbox);out+skel;",
name="#ex#&nbspES:R205_6backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R205_6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R3'](bbox);out+skel;",
name="#ex#&nbspES:R3forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R3.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R3'](bbox);out+skel;",
name="#ex#&nbspES:R3backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R3.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300'](bbox);out+skel;",
name="#ex#&nbspES:R300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300'](bbox);out+skel;",
name="#ex#&nbspES:R300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300_100'](bbox);out+skel;",
name="#ex#&nbspES:R300_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_100'](bbox);out+skel;",
name="#ex#&nbspES:R300_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300_60'](bbox);out+skel;",
name="#ex#&nbspES:R300_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_60'](bbox);out+skel;",
name="#ex#&nbspES:R300_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300_70'](bbox);out+skel;",
name="#ex#&nbspES:R300_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_70'](bbox);out+skel;",
name="#ex#&nbspES:R300_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R300_80'](bbox);out+skel;",
name="#ex#&nbspES:R300_80forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_80.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R300_80'](bbox);out+skel;",
name="#ex#&nbspES:R300_80backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R300_80.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301'](bbox);out+skel;",
name="#ex#&nbspES:R301forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301'](bbox);out+skel;",
name="#ex#&nbspES:R301backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_10'](bbox);out+skel;",
name="#ex#&nbspES:R301_10forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_10.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_10'](bbox);out+skel;",
name="#ex#&nbspES:R301_10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_100'](bbox);out+skel;",
name="#ex#&nbspES:R301_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_100'](bbox);out+skel;",
name="#ex#&nbspES:R301_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_110'](bbox);out+skel;",
name="#ex#&nbspES:R301_110forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_110.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_110'](bbox);out+skel;",
name="#ex#&nbspES:R301_110backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_110.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_120'](bbox);out+skel;",
name="#ex#&nbspES:R301_120forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_120.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_120'](bbox);out+skel;",
name="#ex#&nbspES:R301_120backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_120.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_130'](bbox);out+skel;",
name="#ex#&nbspES:R301_130forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_130.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_130'](bbox);out+skel;",
name="#ex#&nbspES:R301_130backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_130.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_140'](bbox);out+skel;",
name="#ex#&nbspES:R301_140forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_140.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_140'](bbox);out+skel;",
name="#ex#&nbspES:R301_140backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_140.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_20'](bbox);out+skel;",
name="#ex#&nbspES:R301_20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_20'](bbox);out+skel;",
name="#ex#&nbspES:R301_20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_30'](bbox);out+skel;",
name="#ex#&nbspES:R301_30forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_30'](bbox);out+skel;",
name="#ex#&nbspES:R301_30backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_40'](bbox);out+skel;",
name="#ex#&nbspES:R301_40forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_40.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_40'](bbox);out+skel;",
name="#ex#&nbspES:R301_40backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_40.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_50'](bbox);out+skel;",
name="#ex#&nbspES:R301_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_50'](bbox);out+skel;",
name="#ex#&nbspES:R301_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_60'](bbox);out+skel;",
name="#ex#&nbspES:R301_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_60'](bbox);out+skel;",
name="#ex#&nbspES:R301_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_70'](bbox);out+skel;",
name="#ex#&nbspES:R301_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_70'](bbox);out+skel;",
name="#ex#&nbspES:R301_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_80'](bbox);out+skel;",
name="#ex#&nbspES:R301_80forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_80.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_80'](bbox);out+skel;",
name="#ex#&nbspES:R301_80backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_80.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R301_90'](bbox);out+skel;",
name="#ex#&nbspES:R301_90forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_90.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R301_90'](bbox);out+skel;",
name="#ex#&nbspES:R301_90backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R301_90.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R302'](bbox);out+skel;",
name="#ex#&nbspES:R302forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R302.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R302'](bbox);out+skel;",
name="#ex#&nbspES:R302backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R302.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R303'](bbox);out+skel;",
name="#ex#&nbspES:R303forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R303.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R303'](bbox);out+skel;",
name="#ex#&nbspES:R303backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R303.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R304'](bbox);out+skel;",
name="#ex#&nbspES:R304forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R304.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R304'](bbox);out+skel;",
name="#ex#&nbspES:R304backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R304.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R305'](bbox);out+skel;",
name="#ex#&nbspES:R305forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R305.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R305'](bbox);out+skel;",
name="#ex#&nbspES:R305backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R305.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R306'](bbox);out+skel;",
name="#ex#&nbspES:R306forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R306.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R306'](bbox);out+skel;",
name="#ex#&nbspES:R306backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R306.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R307'](bbox);out+skel;",
name="#ex#&nbspES:R307forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R307.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R307'](bbox);out+skel;",
name="#ex#&nbspES:R307backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R307.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308'](bbox);out+skel;",
name="#ex#&nbspES:R308forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308'](bbox);out+skel;",
name="#ex#&nbspES:R308backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308a'](bbox);out+skel;",
name="#ex#&nbspES:R308aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308a'](bbox);out+skel;",
name="#ex#&nbspES:R308abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308b'](bbox);out+skel;",
name="#ex#&nbspES:R308bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308b'](bbox);out+skel;",
name="#ex#&nbspES:R308bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308c'](bbox);out+skel;",
name="#ex#&nbspES:R308cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308c'](bbox);out+skel;",
name="#ex#&nbspES:R308cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308d'](bbox);out+skel;",
name="#ex#&nbspES:R308dforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308d'](bbox);out+skel;",
name="#ex#&nbspES:R308dbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R308e'](bbox);out+skel;",
name="#ex#&nbspES:R308eforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308e.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R308e'](bbox);out+skel;",
name="#ex#&nbspES:R308ebackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R308e.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R309'](bbox);out+skel;",
name="#ex#&nbspES:R309forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R309.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R309'](bbox);out+skel;",
name="#ex#&nbspES:R309backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R309.png"),
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
