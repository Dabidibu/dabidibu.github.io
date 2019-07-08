am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    // networkSeries.dataFields.color = "color"; //
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.label.text = "{name}"

    networkSeries.linkWithStrength = 0;
    networkSeries.dataFields.collapsed = "collapsed";

    // series.dataFields.collapsed = "collapsed";


    networkSeries.fontSize = "20";
    networkSeries.links.template.distance = 1.5;
    networkSeries.colors.list = [
        am4core.color("#9D00FF"),
        am4core.color("#A30EF0"),
        am4core.color("#A91DE1"),
        am4core.color("#AF2BD2"),
        am4core.color("#B53AC3"),

        am4core.color("#BB48B4"),
        am4core.color("#C157A5"),
        am4core.color("#C76596"),
        am4core.color("#CD7487"),
        am4core.color("#D38278"),

        am4core.color("#D99169"),
        am4core.color("#DF9F5A"),
        am4core.color("#E5AE4B"),
        am4core.color("#EBBC3C"),
        am4core.color("#F1CB2D"),
    ];

    //
    // let icon = networkSeries.nodes.template.createChild(am4core.Image);
    // icon.propertyFields.href = "image";

    // icon.href = "4.Images/favicon.png";
    // icon.horizontalCenter = "middle";
    // icon.verticalCenter = "middle";
    // icon.width = 40;
    // icon.height = 40;
    //
    var nodeTemplate = networkSeries.nodes.template;
    nodeTemplate.tooltipText = "{name}";
    nodeTemplate.fillOpacity = 1;
    nodeTemplate.label.hideOversized = true;
    nodeTemplate.label.truncate = true;

    var linkTemplate = networkSeries.links.template;
    linkTemplate.strokeWidth = 1;
    var linkHoverState = linkTemplate.states.create("hover");
    linkHoverState.properties.strokeOpacity = 0.4;
    linkHoverState.properties.strokeWidth = 5;



    nodeTemplate.events.on("over", function(event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function(link) {
            link.isHover = true;
        })
    })

    nodeTemplate.events.on("out", function(event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function(link) {
            link.isHover = false;
        })
    })
    networkSeries.dataSource.url = "5.Assets/amcharts/data.json";

    // networkSeries.colors.list = [
    //     am4core.color("#B131FF"),
    //     am4core.color("#B676E0"),
    //     am4core.color("#D9ABFD"),
    //     am4core.color("#D7B9E1"),
    //     am4core.color("#FAF09F"), //
    //     //
    //     am4core.color("#FAEA68"),
    //     am4core.color("#F7DA1F")
    // ];
}); // end am4core.ready()