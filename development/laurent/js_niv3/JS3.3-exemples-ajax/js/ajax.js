'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onGetResponseExample1(staticHtmlContent)
{
    // Voir la réponse brute
    $('#content-example-1').html(escapeHtml(staticHtmlContent));
    // Insérer la réponse dans le document
    $('#example-1').html(staticHtmlContent);
}

function onGetResponseExample2(staticColorsData)
{
    // Voir la réponse brute
    $('#content-example-2').html(escapeHtml(JSON.stringify(staticColorsData)));

    // Insérer la réponse dans le document
    const $target = $('#example-2').empty();

    staticColorsData.classes.forEach(function(eachClass){
        $target.append(
            $('<p>').addClass(eachClass).text(eachClass)
        );
    });
}

function onGetResponseExample3(dynamicHtmlContent)
{
    // Voir la réponse brute
    $('#content-example-3').html(escapeHtml(dynamicHtmlContent));

    // Insérer la réponse dans le document
    $('#example-3').html(dynamicHtmlContent);
}

function onGetResponseExample4(dynamicJsonDataTrucks)
{
    $('#content-example-4').html(escapeHtml(JSON.stringify(dynamicJsonDataTrucks)));

    const $target = $('#example-4');
    $target.empty().append($('<ul>'));

    dynamicJsonDataTrucks.forEach(function(eachTruck){
        $target.append(
            $('<li>').text(eachTruck.productName)
        );
    });
}

function onGetResponseExample5(dynamicJsonDataCourses)
{
    const courses = JSON.parse(dynamicJsonDataCourses);

    $('#content-example-5').html(escapeHtml(JSON.stringify(courses)));

    const $target = $('#example-5');
    $target.empty();

    // On parcours les courses pour les afficher sous forme de liste
    $(courses).each(function(index, item){
        $target.append($('<li>').text(item));
    });
}
