
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
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R310'](bbox);out+skel;",
name="#ex#&nbspES:R310forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R310.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R310'](bbox);out+skel;",
name="#ex#&nbspES:R310backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R310.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R4'](bbox);out+skel;",
name="#ex#&nbspES:R4forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R4.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R4'](bbox);out+skel;",
name="#ex#&nbspES:R4backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R4.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400a'](bbox);out+skel;",
name="#ex#&nbspES:R400aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400a'](bbox);out+skel;",
name="#ex#&nbspES:R400abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400b'](bbox);out+skel;",
name="#ex#&nbspES:R400bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400b'](bbox);out+skel;",
name="#ex#&nbspES:R400bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400c'](bbox);out+skel;",
name="#ex#&nbspES:R400cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400c'](bbox);out+skel;",
name="#ex#&nbspES:R400cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400d'](bbox);out+skel;",
name="#ex#&nbspES:R400dforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400d.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400d'](bbox);out+skel;",
name="#ex#&nbspES:R400dbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400d.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R400e'](bbox);out+skel;",
name="#ex#&nbspES:R400eforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400e.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R400e'](bbox);out+skel;",
name="#ex#&nbspES:R400ebackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R400e.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R401a'](bbox);out+skel;",
name="#ex#&nbspES:R401aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401a'](bbox);out+skel;",
name="#ex#&nbspES:R401abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R401b'](bbox);out+skel;",
name="#ex#&nbspES:R401bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401b'](bbox);out+skel;",
name="#ex#&nbspES:R401bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R401c'](bbox);out+skel;",
name="#ex#&nbspES:R401cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R401c'](bbox);out+skel;",
name="#ex#&nbspES:R401cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R401c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R402'](bbox);out+skel;",
name="#ex#&nbspES:R402forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R402.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R402'](bbox);out+skel;",
name="#ex#&nbspES:R402backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R402.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R403a'](bbox);out+skel;",
name="#ex#&nbspES:R403aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403a'](bbox);out+skel;",
name="#ex#&nbspES:R403abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R403b'](bbox);out+skel;",
name="#ex#&nbspES:R403bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403b'](bbox);out+skel;",
name="#ex#&nbspES:R403bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R403c'](bbox);out+skel;",
name="#ex#&nbspES:R403cforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403c.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R403c'](bbox);out+skel;",
name="#ex#&nbspES:R403cbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R403c.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R404'](bbox);out+skel;",
name="#ex#&nbspES:R404forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R404.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R404'](bbox);out+skel;",
name="#ex#&nbspES:R404backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R404.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R405'](bbox);out+skel;",
name="#ex#&nbspES:R405forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R405.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R405'](bbox);out+skel;",
name="#ex#&nbspES:R405backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R405.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R406'](bbox);out+skel;",
name="#ex#&nbspES:R406forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R406.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R406'](bbox);out+skel;",
name="#ex#&nbspES:R406backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R406.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R407a'](bbox);out+skel;",
name="#ex#&nbspES:R407aforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407a.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R407a'](bbox);out+skel;",
name="#ex#&nbspES:R407abackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407a.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R407b'](bbox);out+skel;",
name="#ex#&nbspES:R407bforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407b.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R407b'](bbox);out+skel;",
name="#ex#&nbspES:R407bbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R407b.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R408'](bbox);out+skel;",
name="#ex#&nbspES:R408forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R408.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R408'](bbox);out+skel;",
name="#ex#&nbspES:R408backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R408.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R409'](bbox);out+skel;",
name="#ex#&nbspES:R409forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R409.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R409'](bbox);out+skel;",
name="#ex#&nbspES:R409backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R409.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R410'](bbox);out+skel;",
name="#ex#&nbspES:R410forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R410.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R410'](bbox);out+skel;",
name="#ex#&nbspES:R410backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R410.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411'](bbox);out+skel;",
name="#ex#&nbspES:R411forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411'](bbox);out+skel;",
name="#ex#&nbspES:R411backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411_20'](bbox);out+skel;",
name="#ex#&nbspES:R411_20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_20'](bbox);out+skel;",
name="#ex#&nbspES:R411_20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411_30'](bbox);out+skel;",
name="#ex#&nbspES:R411_30forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_30'](bbox);out+skel;",
name="#ex#&nbspES:R411_30backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411_50'](bbox);out+skel;",
name="#ex#&nbspES:R411_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_50'](bbox);out+skel;",
name="#ex#&nbspES:R411_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411_60'](bbox);out+skel;",
name="#ex#&nbspES:R411_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_60'](bbox);out+skel;",
name="#ex#&nbspES:R411_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411_70'](bbox);out+skel;",
name="#ex#&nbspES:R411_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_70'](bbox);out+skel;",
name="#ex#&nbspES:R411_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411_80'](bbox);out+skel;",
name="#ex#&nbspES:R411_80forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_80.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_80'](bbox);out+skel;",
name="#ex#&nbspES:R411_80backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_80.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R411_90'](bbox);out+skel;",
name="#ex#&nbspES:R411_90forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_90.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R411_90'](bbox);out+skel;",
name="#ex#&nbspES:R411_90backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R411_90.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R412'](bbox);out+skel;",
name="#ex#&nbspES:R412forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R412.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R412'](bbox);out+skel;",
name="#ex#&nbspES:R412backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R412.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R413'](bbox);out+skel;",
name="#ex#&nbspES:R413forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R413.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R413'](bbox);out+skel;",
name="#ex#&nbspES:R413backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R413.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R414'](bbox);out+skel;",
name="#ex#&nbspES:R414forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R414.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R414'](bbox);out+skel;",
name="#ex#&nbspES:R414backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R414.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R415'](bbox);out+skel;",
name="#ex#&nbspES:R415forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R415.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R415'](bbox);out+skel;",
name="#ex#&nbspES:R415backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R415.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R416'](bbox);out+skel;",
name="#ex#&nbspES:R416forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R416.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R416'](bbox);out+skel;",
name="#ex#&nbspES:R416backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R416.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R417'](bbox);out+skel;",
name="#ex#&nbspES:R417forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R417.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R417'](bbox);out+skel;",
name="#ex#&nbspES:R417backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R417.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R418'](bbox);out+skel;",
name="#ex#&nbspES:R418forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R418.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R418'](bbox);out+skel;",
name="#ex#&nbspES:R418backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R418.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R5'](bbox);out+skel;",
name="#ex#&nbspES:R5forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R5.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R5'](bbox);out+skel;",
name="#ex#&nbspES:R5backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R5.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R500'](bbox);out+skel;",
name="#ex#&nbspES:R500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R500'](bbox);out+skel;",
name="#ex#&nbspES:R500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501'](bbox);out+skel;",
name="#ex#&nbspES:R501forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501'](bbox);out+skel;",
name="#ex#&nbspES:R501backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_100'](bbox);out+skel;",
name="#ex#&nbspES:R501_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_100'](bbox);out+skel;",
name="#ex#&nbspES:R501_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_20'](bbox);out+skel;",
name="#ex#&nbspES:R501_20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_20'](bbox);out+skel;",
name="#ex#&nbspES:R501_20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_30'](bbox);out+skel;",
name="#ex#&nbspES:R501_30forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_30'](bbox);out+skel;",
name="#ex#&nbspES:R501_30backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_40'](bbox);out+skel;",
name="#ex#&nbspES:R501_40forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_40.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_40'](bbox);out+skel;",
name="#ex#&nbspES:R501_40backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_40.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_50'](bbox);out+skel;",
name="#ex#&nbspES:R501_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_50'](bbox);out+skel;",
name="#ex#&nbspES:R501_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_60'](bbox);out+skel;",
name="#ex#&nbspES:R501_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_60'](bbox);out+skel;",
name="#ex#&nbspES:R501_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_70'](bbox);out+skel;",
name="#ex#&nbspES:R501_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_70'](bbox);out+skel;",
name="#ex#&nbspES:R501_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_80'](bbox);out+skel;",
name="#ex#&nbspES:R501_80forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_80.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_80'](bbox);out+skel;",
name="#ex#&nbspES:R501_80backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_80.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R501_90'](bbox);out+skel;",
name="#ex#&nbspES:R501_90forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_90.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R501_90'](bbox);out+skel;",
name="#ex#&nbspES:R501_90backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R501_90.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R502'](bbox);out+skel;",
name="#ex#&nbspES:R502forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R502.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R502'](bbox);out+skel;",
name="#ex#&nbspES:R502backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R502.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R503'](bbox);out+skel;",
name="#ex#&nbspES:R503forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R503.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R503'](bbox);out+skel;",
name="#ex#&nbspES:R503backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R503.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R504'](bbox);out+skel;",
name="#ex#&nbspES:R504forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R504.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R504'](bbox);out+skel;",
name="#ex#&nbspES:R504backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R504.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R505'](bbox);out+skel;",
name="#ex#&nbspES:R505forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R505.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R505'](bbox);out+skel;",
name="#ex#&nbspES:R505backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R505.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506'](bbox);out+skel;",
name="#ex#&nbspES:R506forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506'](bbox);out+skel;",
name="#ex#&nbspES:R506backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_30'](bbox);out+skel;",
name="#ex#&nbspES:R506_30forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_30'](bbox);out+skel;",
name="#ex#&nbspES:R506_30backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_50'](bbox);out+skel;",
name="#ex#&nbspES:R506_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_50'](bbox);out+skel;",
name="#ex#&nbspES:R506_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_60'](bbox);out+skel;",
name="#ex#&nbspES:R506_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_60'](bbox);out+skel;",
name="#ex#&nbspES:R506_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_70'](bbox);out+skel;",
name="#ex#&nbspES:R506_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_70'](bbox);out+skel;",
name="#ex#&nbspES:R506_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R506_90'](bbox);out+skel;",
name="#ex#&nbspES:R506_90forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_90.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R506_90'](bbox);out+skel;",
name="#ex#&nbspES:R506_90backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R506_90.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R6'](bbox);out+skel;",
name="#ex#&nbspES:R6forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R6.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R6'](bbox);out+skel;",
name="#ex#&nbspES:R6backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R6.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:Ruta_europea'](bbox);out+skel;",
name="#ex#&nbspES:Ruta_europeaforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_Ruta_europea.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:Ruta_europea'](bbox);out+skel;",
name="#ex#&nbspES:Ruta_europeabackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_Ruta_europea.png"),
false

),
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
QURL + "?data=node['traffic_sign:forward'='ES:S100_200'](bbox);out+skel;",
name="#ex#&nbspES:S100_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100_200'](bbox);out+skel;",
name="#ex#&nbspES:S100_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S100_250'](bbox);out+skel;",
name="#ex#&nbspES:S100_250forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_250.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100_250'](bbox);out+skel;",
name="#ex#&nbspES:S100_250backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_250.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S100_300'](bbox);out+skel;",
name="#ex#&nbspES:S100_300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100_300'](bbox);out+skel;",
name="#ex#&nbspES:S100_300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S100_500'](bbox);out+skel;",
name="#ex#&nbspES:S100_500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S100_500'](bbox);out+skel;",
name="#ex#&nbspES:S100_500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S100_500.png"),
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
QURL + "?data=node['traffic_sign:forward'='ES:S105_1000'](bbox);out+skel;",
name="#ex#&nbspES:S105_1000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_1000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_1000'](bbox);out+skel;",
name="#ex#&nbspES:S105_1000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_1000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S105_200'](bbox);out+skel;",
name="#ex#&nbspES:S105_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_200'](bbox);out+skel;",
name="#ex#&nbspES:S105_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S105_300'](bbox);out+skel;",
name="#ex#&nbspES:S105_300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_300'](bbox);out+skel;",
name="#ex#&nbspES:S105_300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S105_400'](bbox);out+skel;",
name="#ex#&nbspES:S105_400forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_400.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_400'](bbox);out+skel;",
name="#ex#&nbspES:S105_400backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_400.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S105_500'](bbox);out+skel;",
name="#ex#&nbspES:S105_500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S105_500'](bbox);out+skel;",
name="#ex#&nbspES:S105_500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S105_500.png"),
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
QURL + "?data=node['traffic_sign:forward'='ES:S110_1000'](bbox);out+skel;",
name="#ex#&nbspES:S110_1000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_1000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110_1000'](bbox);out+skel;",
name="#ex#&nbspES:S110_1000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_1000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S110_200'](bbox);out+skel;",
name="#ex#&nbspES:S110_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110_200'](bbox);out+skel;",
name="#ex#&nbspES:S110_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S110_300'](bbox);out+skel;",
name="#ex#&nbspES:S110_300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110_300'](bbox);out+skel;",
name="#ex#&nbspES:S110_300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S110_500'](bbox);out+skel;",
name="#ex#&nbspES:S110_500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S110_500'](bbox);out+skel;",
name="#ex#&nbspES:S110_500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S110_500.png"),
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
QURL + "?data=node['traffic_sign:forward'='ES:S111_100'](bbox);out+skel;",
name="#ex#&nbspES:S111_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_100'](bbox);out+skel;",
name="#ex#&nbspES:S111_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S111_1000'](bbox);out+skel;",
name="#ex#&nbspES:S111_1000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_1000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_1000'](bbox);out+skel;",
name="#ex#&nbspES:S111_1000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_1000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S111_200'](bbox);out+skel;",
name="#ex#&nbspES:S111_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_200'](bbox);out+skel;",
name="#ex#&nbspES:S111_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S111_250'](bbox);out+skel;",
name="#ex#&nbspES:S111_250forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_250.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_250'](bbox);out+skel;",
name="#ex#&nbspES:S111_250backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_250.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S111_300'](bbox);out+skel;",
name="#ex#&nbspES:S111_300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_300'](bbox);out+skel;",
name="#ex#&nbspES:S111_300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S111_500'](bbox);out+skel;",
name="#ex#&nbspES:S111_500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S111_500'](bbox);out+skel;",
name="#ex#&nbspES:S111_500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S111_500.png"),
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
QURL + "?data=node['traffic_sign:forward'='ES:S118_100'](bbox);out+skel;",
name="#ex#&nbspES:S118_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_100'](bbox);out+skel;",
name="#ex#&nbspES:S118_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S118_1000'](bbox);out+skel;",
name="#ex#&nbspES:S118_1000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_1000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_1000'](bbox);out+skel;",
name="#ex#&nbspES:S118_1000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_1000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S118_200'](bbox);out+skel;",
name="#ex#&nbspES:S118_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_200'](bbox);out+skel;",
name="#ex#&nbspES:S118_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S118_250'](bbox);out+skel;",
name="#ex#&nbspES:S118_250forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_250.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_250'](bbox);out+skel;",
name="#ex#&nbspES:S118_250backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_250.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S118_300'](bbox);out+skel;",
name="#ex#&nbspES:S118_300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_300'](bbox);out+skel;",
name="#ex#&nbspES:S118_300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S118_400'](bbox);out+skel;",
name="#ex#&nbspES:S118_400forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_400.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_400'](bbox);out+skel;",
name="#ex#&nbspES:S118_400backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_400.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S118_500'](bbox);out+skel;",
name="#ex#&nbspES:S118_500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_500'](bbox);out+skel;",
name="#ex#&nbspES:S118_500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S118_800'](bbox);out+skel;",
name="#ex#&nbspES:S118_800forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_800.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S118_800'](bbox);out+skel;",
name="#ex#&nbspES:S118_800backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S118_800.png"),
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
QURL + "?data=node['traffic_sign:backward'='ES:S7_10'](bbox);out+skel;",
name="#ex#&nbspES:S7_10backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_10.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_100'](bbox);out+skel;",
name="#ex#&nbspES:S7_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_100'](bbox);out+skel;",
name="#ex#&nbspES:S7_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_20'](bbox);out+skel;",
name="#ex#&nbspES:S7_20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_20'](bbox);out+skel;",
name="#ex#&nbspES:S7_20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_30'](bbox);out+skel;",
name="#ex#&nbspES:S7_30forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_30'](bbox);out+skel;",
name="#ex#&nbspES:S7_30backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_40'](bbox);out+skel;",
name="#ex#&nbspES:S7_40forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_40.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_40'](bbox);out+skel;",
name="#ex#&nbspES:S7_40backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_40.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_50'](bbox);out+skel;",
name="#ex#&nbspES:S7_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_50'](bbox);out+skel;",
name="#ex#&nbspES:S7_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_60'](bbox);out+skel;",
name="#ex#&nbspES:S7_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_60'](bbox);out+skel;",
name="#ex#&nbspES:S7_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_70'](bbox);out+skel;",
name="#ex#&nbspES:S7_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_70'](bbox);out+skel;",
name="#ex#&nbspES:S7_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_80'](bbox);out+skel;",
name="#ex#&nbspES:S7_80forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_80.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_80'](bbox);out+skel;",
name="#ex#&nbspES:S7_80backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_80.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7_90'](bbox);out+skel;",
name="#ex#&nbspES:S7_90forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_90.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7_90'](bbox);out+skel;",
name="#ex#&nbspES:S7_90backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7_90.png"),
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
QURL + "?data=node['traffic_sign:forward'='ES:S800_100'](bbox);out+skel;",
name="#ex#&nbspES:S800_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_100'](bbox);out+skel;",
name="#ex#&nbspES:S800_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_1000'](bbox);out+skel;",
name="#ex#&nbspES:S800_1000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_1000'](bbox);out+skel;",
name="#ex#&nbspES:S800_1000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_1300'](bbox);out+skel;",
name="#ex#&nbspES:S800_1300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_1300'](bbox);out+skel;",
name="#ex#&nbspES:S800_1300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_150'](bbox);out+skel;",
name="#ex#&nbspES:S800_150forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_150.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_150'](bbox);out+skel;",
name="#ex#&nbspES:S800_150backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_150.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_1500'](bbox);out+skel;",
name="#ex#&nbspES:S800_1500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_1500'](bbox);out+skel;",
name="#ex#&nbspES:S800_1500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_1km'](bbox);out+skel;",
name="#ex#&nbspES:S800_1kmforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1km.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_1km'](bbox);out+skel;",
name="#ex#&nbspES:S800_1kmbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_1km.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_200'](bbox);out+skel;",
name="#ex#&nbspES:S800_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_200'](bbox);out+skel;",
name="#ex#&nbspES:S800_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_250'](bbox);out+skel;",
name="#ex#&nbspES:S800_250forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_250.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_250'](bbox);out+skel;",
name="#ex#&nbspES:S800_250backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_250.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_300'](bbox);out+skel;",
name="#ex#&nbspES:S800_300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_300'](bbox);out+skel;",
name="#ex#&nbspES:S800_300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_350'](bbox);out+skel;",
name="#ex#&nbspES:S800_350forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_350.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_350'](bbox);out+skel;",
name="#ex#&nbspES:S800_350backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_350.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_400'](bbox);out+skel;",
name="#ex#&nbspES:S800_400forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_400.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_400'](bbox);out+skel;",
name="#ex#&nbspES:S800_400backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_400.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_450'](bbox);out+skel;",
name="#ex#&nbspES:S800_450forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_450.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_450'](bbox);out+skel;",
name="#ex#&nbspES:S800_450backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_450.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_50'](bbox);out+skel;",
name="#ex#&nbspES:S800_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_50'](bbox);out+skel;",
name="#ex#&nbspES:S800_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_500'](bbox);out+skel;",
name="#ex#&nbspES:S800_500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_500'](bbox);out+skel;",
name="#ex#&nbspES:S800_500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_5km'](bbox);out+skel;",
name="#ex#&nbspES:S800_5kmforward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_5km.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_5km'](bbox);out+skel;",
name="#ex#&nbspES:S800_5kmbackward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_5km.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_600'](bbox);out+skel;",
name="#ex#&nbspES:S800_600forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_600.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_600'](bbox);out+skel;",
name="#ex#&nbspES:S800_600backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_600.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_700'](bbox);out+skel;",
name="#ex#&nbspES:S800_700forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_700.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_700'](bbox);out+skel;",
name="#ex#&nbspES:S800_700backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_700.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_800'](bbox);out+skel;",
name="#ex#&nbspES:S800_800forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_800.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_800'](bbox);out+skel;",
name="#ex#&nbspES:S800_800backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_800.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S800_900'](bbox);out+skel;",
name="#ex#&nbspES:S800_900forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_900.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S800_900'](bbox);out+skel;",
name="#ex#&nbspES:S800_900backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800_900.png"),
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
QURL + "?data=node['traffic_sign:forward'='ES:S810_100'](bbox);out+skel;",
name="#ex#&nbspES:S810_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_100'](bbox);out+skel;",
name="#ex#&nbspES:S810_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_1000'](bbox);out+skel;",
name="#ex#&nbspES:S810_1000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_1000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_1000'](bbox);out+skel;",
name="#ex#&nbspES:S810_1000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_1000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_1500'](bbox);out+skel;",
name="#ex#&nbspES:S810_1500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_1500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_1500'](bbox);out+skel;",
name="#ex#&nbspES:S810_1500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_1500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_200'](bbox);out+skel;",
name="#ex#&nbspES:S810_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_200'](bbox);out+skel;",
name="#ex#&nbspES:S810_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_2000'](bbox);out+skel;",
name="#ex#&nbspES:S810_2000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_2000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_2000'](bbox);out+skel;",
name="#ex#&nbspES:S810_2000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_2000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_2500'](bbox);out+skel;",
name="#ex#&nbspES:S810_2500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_2500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_2500'](bbox);out+skel;",
name="#ex#&nbspES:S810_2500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_2500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_3000'](bbox);out+skel;",
name="#ex#&nbspES:S810_3000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_3000'](bbox);out+skel;",
name="#ex#&nbspES:S810_3000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_350'](bbox);out+skel;",
name="#ex#&nbspES:S810_350forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_350.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_350'](bbox);out+skel;",
name="#ex#&nbspES:S810_350backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_350.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_3500'](bbox);out+skel;",
name="#ex#&nbspES:S810_3500forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3500.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_3500'](bbox);out+skel;",
name="#ex#&nbspES:S810_3500backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3500.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_3500_2'](bbox);out+skel;",
name="#ex#&nbspES:S810_3500_2forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3500_2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_3500_2'](bbox);out+skel;",
name="#ex#&nbspES:S810_3500_2backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_3500_2.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_4000'](bbox);out+skel;",
name="#ex#&nbspES:S810_4000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_4000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_4000'](bbox);out+skel;",
name="#ex#&nbspES:S810_4000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_4000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_4250'](bbox);out+skel;",
name="#ex#&nbspES:S810_4250forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_4250.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_4250'](bbox);out+skel;",
name="#ex#&nbspES:S810_4250backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_4250.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S810_5000'](bbox);out+skel;",
name="#ex#&nbspES:S810_5000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_5000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S810_5000'](bbox);out+skel;",
name="#ex#&nbspES:S810_5000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S810_5000.png"),
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
QURL + "?data=node['traffic_sign:forward'='ES:S840_100'](bbox);out+skel;",
name="#ex#&nbspES:S840_100forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_100.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_100'](bbox);out+skel;",
name="#ex#&nbspES:S840_100backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_100.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S840_1000'](bbox);out+skel;",
name="#ex#&nbspES:S840_1000forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_1000.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_1000'](bbox);out+skel;",
name="#ex#&nbspES:S840_1000backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_1000.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S840_150'](bbox);out+skel;",
name="#ex#&nbspES:S840_150forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_150.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_150'](bbox);out+skel;",
name="#ex#&nbspES:S840_150backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_150.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S840_200'](bbox);out+skel;",
name="#ex#&nbspES:S840_200forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_200.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_200'](bbox);out+skel;",
name="#ex#&nbspES:S840_200backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_200.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S840_300'](bbox);out+skel;",
name="#ex#&nbspES:S840_300forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_300.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_300'](bbox);out+skel;",
name="#ex#&nbspES:S840_300backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_300.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S840_50'](bbox);out+skel;",
name="#ex#&nbspES:S840_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_50'](bbox);out+skel;",
name="#ex#&nbspES:S840_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S840_900'](bbox);out+skel;",
name="#ex#&nbspES:S840_900forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_900.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S840_900'](bbox);out+skel;",
name="#ex#&nbspES:S840_900backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S840_900.png"),
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
QURL + "?data=node['traffic_sign:forward'='ES:S8_20'](bbox);out+skel;",
name="#ex#&nbspES:S8_20forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_20.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_20'](bbox);out+skel;",
name="#ex#&nbspES:S8_20backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_20.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8_30'](bbox);out+skel;",
name="#ex#&nbspES:S8_30forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_30.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_30'](bbox);out+skel;",
name="#ex#&nbspES:S8_30backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_30.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8_40'](bbox);out+skel;",
name="#ex#&nbspES:S8_40forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_40.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_40'](bbox);out+skel;",
name="#ex#&nbspES:S8_40backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_40.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8_50'](bbox);out+skel;",
name="#ex#&nbspES:S8_50forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_50.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_50'](bbox);out+skel;",
name="#ex#&nbspES:S8_50backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_50.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8_60'](bbox);out+skel;",
name="#ex#&nbspES:S8_60forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_60.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_60'](bbox);out+skel;",
name="#ex#&nbspES:S8_60backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_60.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8_70'](bbox);out+skel;",
name="#ex#&nbspES:S8_70forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_70.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_70'](bbox);out+skel;",
name="#ex#&nbspES:S8_70backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_70.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8_80'](bbox);out+skel;",
name="#ex#&nbspES:S8_80forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_80.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_80'](bbox);out+skel;",
name="#ex#&nbspES:S8_80backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_80.png"),
false

),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S8_90'](bbox);out+skel;",
name="#ex#&nbspES:S8_90forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_90.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S8_90'](bbox);out+skel;",
name="#ex#&nbspES:S8_90backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S8_90.png"),
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



make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P26'](bbox);out+skel;",
name="#ex#&nbspES:P26 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P26.png"),
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
