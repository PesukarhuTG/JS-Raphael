// CONTAINER-01

let paper01 = Raphael("container-01", 656, 390); //container size
let dot = paper01.circle(328, 195, 150).attr({  //figure position: center of width, center of height, radius
    fill: "#ffffff", 
    stroke: "#db1a5e", 
    "stroke-width": 2 
    }); 


// CONTAINER-02

window.addEventListener ('load', function() {
    let paper02 = Raphael("container-02", 656, 390);
    for (let i = 0; i < 8; i+=1) {
        let multiplier = i*8;
        paper02.circle (328 + (2 * multiplier), 200 + multiplier, 120 - multiplier).attr ({
            stroke: "#111185", 
            "stroke-width": 1 
        })}
    });

// CONTAINER-03

window.addEventListener ('load', function() {
    let paper03 = Raphael("container-03", 656, 390);
    for (let i = 0; i < 12; i+=1) {
        let multiplier = i*12;
        paper03.circle (328 + multiplier, 200 + multiplier, 120 - multiplier).attr ({
            fill: "#ffffff", 
            stroke: "#db1a5e", 
            "stroke-width": 2 
        })}
    });

// CONTAINER-04

let paper04 = Raphael("container-04", 656, 390);
let object = paper04.circle(328, 195, 150).attr ({
    gradient: '150-#f944ab-#db731a',
    stroke: '#db1a5e',
    'stroke-width': 2,
    'stroke-linejoin': 'round',
    rotation: -120
   });

 // CONTAINER-05 using readysetraphael.com to convert SVG to Raphael

 window.addEventListener ('load', function() { 
    let logo = Raphael("container-05", 656, 390);
    let group_a = logo.set(); 
    group_a.attr({'name': 'group_a'}); 
    let group_b = logo.set(); 
    group_b.attr({
        'parent': 'group_a',
        'name': 'group_b'}); 
    let group_c = logo.set(); 
    let path_d = logo.path("M354.1,57.4c-2,0.3-3.9,7.5-7.7,11.3c-2.8,2.7-6.3,2.6-8.1,5.9c-0.7,1.3-0.5,3.4-1.3,5.5c-1.6,4.1-7,4.5-7,9 c0,4.9,4.6,5.8,8.5,9.2c3.1,2.8,3.4,4.7,7.1,6c3.2,1.1,8-2.5,12.2-1.2c3.5,1.1,6.9,1.8,7.7,5.4c0.7,3.3,0,8.5-4.3,7.9 c-1.4-0.2-7.7-2.3-15.3-1.4c-9.2,1.1-19.8,4.1-20.8,14.4c-0.6,5.8,6.6,12.6,13.4,11.2c4.8-0.9,2.5-6.5,5.1-9.3 c3.4-3.5,22.6,12.2,40.5,12.2c7.5,0,13.1-1.9,18.7-7.7c0.5-0.4,1.2-1.4,2-1.5c0.8,0.1,2.1,0.8,2.5,1.1 c14.4,11.6,25.3,34.8,78.2,35.1c7.4,0,15.9,3.6,22.8,9.9c6.2,5.7,9.8,14.6,13.3,23.6c5.3,13.5,14.8,26.7,29.2,41.3 c0.8,0.8,12.6,10,13.6,10.7c0.2,0.1,1,2.2,0.7,3.3c-0.4,8.8-1.6,34.3,17.4,35.5c4.7,0.2,3.4-3,3.4-5.3c0-4.4-0.8-8.9,1.5-13.4 c3.2-6.3-6.8-9.1-6.5-22.7c0.2-10.1-8.3-8.4-12.6-16.1c-2.5-4.5-4.7-6.8-4.5-12.3c1-30.7-6.5-50.8-10.3-55.8 c-2.9-3.7-5.3-5.2-2.7-7c15.9-10.5,19.5-20.2,19.5-20.2c8.4-19.9,16-38,26.5-46c2.1-1.6,7.5-5.7,10.8-7.3 c9.8-4.6,14.9-7.4,17.8-10.2c4.5-4.4,8-13.5,3.7-19c-5.4-6.8-14.6-1.4-18.7,1c-29.2,17.3-33.5,47.9-43.6,65.4 c-8.1,14-21.2,24.3-32.9,25.2c-8.8,0.7-18.3-1.1-27.7-5.3C483.5,136,471,123,468,120.7c-6.2-4.8-54-51.8-92.8-53.7 c0,0-4.8-9.6-6-9.8c-2.8-0.4-5.7,5.8-7.8,6.5C359.4,64.3,356.1,57.1,354.1,57.4 M183.4,337.9c-3.7-0.1-6.8-3.1-6.8-6.8l0-121 h-39.9v133.4c0,6.5,5.3,11.9,11.8,11.9h69.7c6.5,0,11.8-5.3,11.8-11.9V210.1h-39.8l0,121C190.1,334.8,187,337.8,183.4,337.9 M316.9,210.1h-60.4c-7.1,0-13,5.8-13,13v132.2h39.9V234c0-3.7,3-6.7,6.7-6.7c3.7,0,6.7,2.9,6.8,6.6v121.4h39.8V233.9 c0-3.7,3-6.6,6.8-6.6c3.7,0,6.7,2.9,6.8,6.7v121.3h39.9V223.1c0-7.2-5.8-13-13-13L316.9,210.1z M83.4,234.3c0-4-3.3-6.9-6.8-6.9 h-6.8v73.5h6.8c3.5,0,6.8-2.8,6.8-6.8V234.3z M110.1,318.8H69.9v36.5H30V210.1h80.4c7.2,0,12.8,5.8,12.8,13.1v82.6 C123.2,313,117.4,318.8,110.1,318.8 M527,322.8c-8,0-14.7,6.9-14.7,15.3c0,8.4,6.7,15.3,15,15.3c8.2,0,14.8-6.9,14.8-15.3 c0-8.4-6.6-15.3-14.8-15.3H527z M544.9,338.1c0,9.9-7.9,17.9-17.7,17.9c-9.9,0-17.8-8-17.8-17.9c0-9.7,7.9-17.9,17.5-17.9 C537,320.2,544.9,328.1,544.9,338.1").attr({
        parent: 'group_a',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'}).data('id', 'path_d'); 
    let path_e = logo.path("M525.4,337c2.8,0,4.2-1,4.2-3c0-1.8-1.4-2.6-4.1-2.6h-0.8v5.6H525.4z M535.6,348.5h-4.8l-6.1-8.1v8.1h-3.9v-20.6h4.1 c5.6,0,8.5,2.1,8.5,6.1c0,2.7-1.7,5.1-4.2,5.8l-0.3,0.1L535.6,348.5z M457.1,300.9V234c-0.1-3.7-3.1-6.5-6.8-6.5 c-3.7,0-6.7,3-6.8,6.6v66.8L457.1,300.9z M457.1,355.3v-36.5h-13.5v36.5h-39.8V223.1c0-7.2,5.8-13,13-13H484c7.2,0,13,5.8,13,13 v132.2L457.1,355.3z").attr({
        parent: 'group_a',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'}).data('id', 'path_e'); 
    group_c.attr({
        'parent': 'group_a',
        'name': 'group_c'}); 
    let logoGroups = [group_a, group_b, group_c]; 
    group_a.push( ); 
    group_b.push( ); 
    group_c.push( path_d , path_e );
});

//We use window.addEventListener instead 2 window.onload