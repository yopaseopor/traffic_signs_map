
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
QURL + "?data=node['traffic_sign:forward'='ES:P1'](bbox);out+skel;",
name="#ex#&nbspES:P1 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1b'](bbox);out+skel;",
name="#ex#&nbspES:P1b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1b.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1b'](bbox);out+skel;",
name="#ex#&nbspES:P1b Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1b.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P1c'](bbox);out+skel;",
name="#ex#&nbspES:P1c Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1c.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P1c'](bbox);out+skel;",
name="#ex#&nbspES:P1c Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P1c.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P13a'](bbox);out+skel;",
name="#ex#&nbspES:P13a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13a.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P13a'](bbox);out+skel;",
name="#ex#&nbspES:P13a Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13a.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P13b'](bbox);out+skel;",
name="#ex#&nbspES:P13b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13b.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P13b'](bbox);out+skel;",
name="#ex#&nbspES:P13b Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P13b.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P14a'](bbox);out+skel;",
name="#ex#&nbspES:P14a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14a.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P14a'](bbox);out+skel;",
name="#ex#&nbspES:P14a Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14a.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P14b'](bbox);out+skel;",
name="#ex#&nbspES:P14b Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14b.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P14b'](bbox);out+skel;",
name="#ex#&nbspES:P14b Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P14b.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P20'](bbox);out+skel;",
name="#ex#&nbspES:P20 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P20'](bbox);out+skel;",
name="#ex#&nbspES:P20 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P20.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P24'](bbox);out+skel;",
name="#ex#&nbspES:P24 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P24.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P24'](bbox);out+skel;",
name="#ex#&nbspES:P24 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P24.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P26'](bbox);out+skel;",
name="#ex#&nbspES:P26 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P26.png"),
false
			),
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
			
	
			/* OfficiÃ«le LF routes van het Fietsplatform
			var LFRoutes = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: green;' src='img/line.gif'>&nbspOfficial LF routes (routedatabank.nl)",

                                       "https://www.routedatabank.nl/geoserver/wms",
                                       {layers: "routedatabank:lf_routes",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(LFRoutes);		
			
			var fietsnetwerk1 = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: green;' src='img/line.gif'>&nbspOfficial cycle node network (routedatabank.nl)",
                                       "https://www.routedatabank.nl/geoserver/wms",
                                       {layers: "routedatabank:fietsnetwerken_vrij",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsnetwerk1);	
			
			var fietsknoop1 = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: white;' src='img/tocircle.gif'>&nbspOfficial cycle nodes (routedatabank.nl)",
                                       "https://www.routedatabank.nl/geoserver/wms",
                                       {layers: "routedatabank:fietsknooppunten_vrij",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsknoop1);
			
			var fietsnetwerk = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: #39ff00;' src='img/line.gif'>&nbspOfficial cycle node network (pdok.nl)",
                                       "http://geodata.nationaalgeoregister.nl/fietsknooppuntennetwerk/wms",
                                       {layers: "netwerken",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsnetwerk);	
			
			var fietsknoop = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: white;' src='img/tocircle.gif'>&nbspOfficial cycle nodes (pdok.nl)",
                                       "http://geodata.nationaalgeoregister.nl/fietsknooppuntennetwerk/wms",
                                       {layers: "knooppunten",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsknoop);
	
	}

*/	

	if (type == "bugs"){
		//	dit maakt de layers voor de bugslaag
			map.addLayers([
			
//						),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S7'](bbox);out+skel;",
name="#ex#&nbspES:S7 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S7'](bbox);out+skel;",
name="#ex#&nbspES:S7 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S7.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S13'](bbox);out+skel;",
name="#ex#&nbspES:S13 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S13.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S13'](bbox);out+skel;",
name="#ex#&nbspES:S13 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S13.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S15a'](bbox);out+skel;",
name="#ex#&nbspES:S15a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15a.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S15a'](bbox);out+skel;",
name="#ex#&nbspES:S15a Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S15a.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S17'](bbox);out+skel;",
name="#ex#&nbspES:S17 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S17.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S17'](bbox);out+skel;",
name="#ex#&nbspES:S17 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S17.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S19'](bbox);out+skel;",
name="#ex#&nbspES:S19 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S19.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S19'](bbox);out+skel;",
name="#ex#&nbspES:S19 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S19.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S25'](bbox);out+skel;",
name="#ex#&nbspES:S25 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S25.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S25'](bbox);out+skel;",
name="#ex#&nbspES:S25 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S25.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S26a'](bbox);out+skel;",
name="#ex#&nbspES:S26a Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26a.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S26a'](bbox);out+skel;",
name="#ex#&nbspES:S26a Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S26a.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S200'](bbox);out+skel;",
name="#ex#&nbspES:S200 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S200.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S200'](bbox);out+skel;",
name="#ex#&nbspES:S200 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S200.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S300'](bbox);out+skel;",
name="#ex#&nbspES:S300 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S300.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S300'](bbox);out+skel;",
name="#ex#&nbspES:S300 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S300.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S500'](bbox);out+skel;",
name="#ex#&nbspES:S500 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S500.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S510'](bbox);out+skel;",
name="#ex#&nbspES:S510 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S500.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S510'](bbox);out+skel;",
name="#ex#&nbspES:S510 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S510.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S510'](bbox);out+skel;",
name="#ex#&nbspES:S510 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S510.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S520'](bbox);out+skel;",
name="#ex#&nbspES:S520 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S520.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S520'](bbox);out+skel;",
name="#ex#&nbspES:S520 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S520.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S570'](bbox);out+skel;",
name="#ex#&nbspES:S570 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S570.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S572'](bbox);out+skel;",
name="#ex#&nbspES:S572 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S572.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S572'](bbox);out+skel;",
name="#ex#&nbspES:S572 Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S572.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:2:backward'='ES:S800'](bbox);out+skel;",
name="#ex#&nbspES:S800 :2:Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:2:forward'='ES:S800'](bbox);out+skel;",
name="#ex#&nbspES:S800 :2:Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S800.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:2:backward'='ES:S870'](bbox);out+skel;",
name="#ex#&nbspES:S870 :2:Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S870.png"),
false
			),
make_layer(
QURL + "?data=node['traffic_sign:2:forward'='ES:S870'](bbox);out+skel;",
name="#ex#&nbspES:S870 :2:Forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S870.png"),
false
			),
			
/*						make_layer(
				QURL + "?data=node[wheelchair=no](bbox);out+skel;",
				name="#c#&nbspwheelchair=no",
				defaultPoint2("red"),
				false
			),
			
							make_layer(
				QURL + "?data=node[shop](bbox);out+skel;",
				name="#c#&nbspshop",
				defaultPoint2("yellow"),
				false
			),
			
								make_layer(
				QURL + "?data=node[amenity](bbox);out+skel;",
				name="#c#&nbspamenity",
				defaultPoint2("yellow"),
				false
			),
			
							make_layer(
				QURL + "?data=node[crossing](bbox);out+skel;",
				name="#c#&nbspcrossing only",
				defaultPoint3("red"),
				false
			),
			
								make_layer(
				QURL + "?data=node[crossing=traffic_signals](bbox);out+skel;",
				name="#c#&nbsptraffic_signals",
				defaultPoint4("blue"),
				false
			),	
			
									make_layer(
				QURL + "?data=node[crossing_ref=zebra](bbox);out+skel;",
				name="#c#&nbsptraffic_signals",
				defaultPoint5("grey"),
				false
			),
			
			
			make_layer(QURL + "?data=(relation[route=bicycle](bbox);way[bicycle~'no|use_sidepath'](r);node(w););out+skel;", "#39ff00",name="#l#cycle routes & bicycle=no|use_sidepath",8, true,"5 10"),
	
			make_layer(QURL + "?data=(way[highway=cycleway][bicycle=no][moped!~'^yes|^designated'](bbox);node(w););out+skel;", "#ff00d5",name="#l#cycleway/bicycle=no<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNote: temporarily blocked ways?",10, true),
			
			make_layer(QURL + "?data=(way[cycleway][bicycle~'no|use_sidepath'][cycleway!=no](bbox);node(w);way['cycleway:right'][bicycle=no](bbox);node(w);way['cycleway:left'][bicycle=no](bbox);node(w););out+skel;", "purple",name="#l#cycleway lane, track,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspopposite & bicycle=no|use_sidepath",8, true,"5 10"),
			
			make_layer(QURL + "?data=(way[highway=crossing](bbox);node(w););out+skel;", "red",name="#l#highway=crossing<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(should be a node, not a way)",8, true),
			
			make_layer(QURL + "?data=(way[highway=road](bbox);node(w);way[highway=cycleway][fixme](bbox);node(w);way[highway=cycleway][FIXME](bbox);node(w);way[cycleway][fixme](bbox);node(w);way[cycleway][FIXME](bbox);node(w););out+skel;", "green",name="#l#highway=road or cycleway<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspfixme (better tagging needed)",8, true),
			
			make_layer(QURL + "?data=(way[highway~'Pad|pad|Rad|rad|unknown'](bbox);node(w););out+skel;", "#ff6520",name="#l#highway=nonsense",8, true,"5 10@0.5"),
			
			make_layer(QURL + "?data=(relation[route=bicycle](bbox););way(r:\"\")(bbox)->.b;(way.b[oneway=yes];)->.c;(way.c[\"oneway:bicycle\"=no];way.c[cycleway=opposite];way.c[oneway=\"-1\"];way.c[oneway=\"bicycle:backward\"];way.c[oneway=\"bicycle:forward\"];way.c[cycleway=\"opposite_lane\"];)->.d;(.c;- .d;);(._;>;);out+skel;","#17202a",name="#l#oneway cycle route without b/f role",8, true,"5 10"),
			
			// overbodige tags?
			make_layer(QURL + "?data=(way[highway=cycleway][cycleway][cycleway!=shared][cycleway!=segregated](bbox);node(w););out+skel;", "#39ffd5",name="#l#highway=cycleway & cycleway=*",8, false),
      
			make_layer(QURL + "?data=(way[highway=cycleway][bicycle~'yes|designated'](bbox);node(w););out+skel;", "blue",name="#l#cycleway &<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspbicycle=yes/designated<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(needless tagging?)", 3, false,"5 10"),
			
			make_layer(QURL + "?data=(way[name~'^Fietspad|^fietspad|^pad$|^Pad$|cycleway|^path$|^Path$'](bbox);node(w);way[highway=cycleway][name!~'.'](bbox);node(w););out+skel;", "#ffff00",name="#l#cycleway/path without<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspstreetname (address search)",4, false),
*/
			]);
	}
	


}
	

function popuplinks(lonlat){

	  var thelink = "<div STYLE=\"margin:0px 0px 0px 0px;font-size: 8pt;\"><b>MAPA</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\"><img src='img/osm.gif'>OSM</a>&nbsp&nbsp"
	  //COPIAR You can configure all services give you longitud and latitude and specific zoom in URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "zoomcode" target=\"_blank\"><img src='url icon'>Name of the service</a>&nbsp&nbsp";
	  //COPIAR Puedes configurar todo aquel servicio que te dé longitud (lonlat.lon) y latitud (lonla.lat) y un zoom concreto en la URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codigozoom" target=\"_blank\"><img src='url icono'>Nombre del servicio</a>&nbsp&nbsp";
	  //COPIAR Pots configurar tots aquells serveis que et donin longitud i latitud i un zoom concre a l'adreça URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codizoom" target=\"_blank\"><img src='url icona'>Nom del servei</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"https://maps.google.es/maps?ll=" + lonlat.lat + "," + lonlat.lon + "&t=h&z=17\" target=\"_blank\"><img src='img/google.gif'>Google</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.bing.com/maps/?v=2&cp=" + lonlat.lat + "~" + lonlat.lon + "&lvl=17&dir=0&sty=h&form=LMLTCC\" target=\"_blank\"><img src='img/bing.gif'>Bing</a><p>";
	  thelink = thelink + "<a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,normal"  + "\" target=\"_blank\"><img src='img/here.png'>Here</a><hr>";
	  thelink = thelink + "<b>SATELITALES</b><br><a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,satellite"  + "\" target=\"_blank\"><img src='img/digitalglobe.png'>DigitalGlobe</a>";
	  thelink = thelink + "<a href=\"https://www.google.es/maps/@" + lonlat.lat + "," + lonlat.lon + ",100m/data=!3m1!1e3\" target=\"_blank\"><img src='img/google.gif'>Google SAT</a><hr>&nbsp&nbsp";
	  thelink = thelink + "<b>A PIE DE CALLE</b><br><a href=\"https://www.mapillary.com/app/?lat="  + (lonlat.lat) + "&lng=" + (lonlat.lon ) + "&z=15"  + "\" target=\"_blank\"><img src='img/mapillary.png'>Mapillary</a>";
	  thelink = thelink + "<a href=\"https://openstreetcam.org/map/@"  + (lonlat.lat) + "," + (lonlat.lon ) + ",17z"  + "\" target=\"_blank\"><img src='img/openstreetcam.png'>OpenStreetCam</a><hr>";
	   thelink = thelink + "<b>RECORRIDOS</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=CD\" target=\"_blank\"><img src='img/osm.gif'>OSM Cycle Map</a>"
	  thelink = thelink + "<a href=\"http://hiking.waymarkedtrails.org/nl/?zoom=13" +  "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "\" target=\"_blank\"><img src='img/map_hiking.png'>Waymarked trails</a> ";
	  thelink = thelink + "<a href=\"https://www.wikiloc.com/wikiloc/map.do?lt=" + lonlat.lat + "&ln=" + lonlat.lon + "&z=17" + "\" target=\"_blank\"><img src='img/wikiloc.png'>Wikiloc</a><hr>";
	  thelink = thelink + "<b>TRANSPORTE</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=TB\" target=\"_blank\"><img src='img/osm.gif'>OSM Public Transport</a>"
	  thelink = thelink + "<a href=\"http://www.xn--pnvkarte-m4a.de/#" + lonlat.lon + ";" + lonlat.lat + ";15" + "\" target=\"_blank\"><img src='img/opvnkarte.png'>Opvnkarte</a><hr> ";
	  
	  
	
	  var area = 0.04
	  var ctop = lonlat.lat + area;
	  var cbottom = ctop - (2 * area);
	  var cleft = lonlat.lon - area;
	  var cright = cleft + (2 * area); 
	  
	  thelink = thelink + "<b>Editar :</b><br><a href=\"http://localhost:8111/load_and_zoom?top=" + ctop + "&bottom=" + cbottom + "&left=" + cleft + "&right=" + cright + "\" target=\"josm_frame\">JOSM (necesitas conector)</a><br>";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=id&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Editor iD</a><br>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=potlatch2&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 2</a><br>&nbsp&nbsp";	
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 1</a><hr>";
	  
	  thelink = thelink + "<b>Errores en OSM </b><br><a href=\"http://www.openstreetmap.org/#map=12" + "/" + lonlat.lat + "/" + lonlat.lon + "&layers=N" + "\" target=_blank> Notas en Openstreetmap</a><br \>";
	  thelink = thelink + "<a href=\"http://keepright.ipax.at/report_map.php?" + "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=14&&layers=B0T&ch=0%2C50%2C191%2C195%2C201%2C205%2C206%2C311%2C312%2C313%2C402&show_ign=1&show_tmpign=1" + "\" target=_blank> Keepright</a><hr>"; 
	  thelink = thelink + "</b></div>";
	  return thelink;
	  
	}
