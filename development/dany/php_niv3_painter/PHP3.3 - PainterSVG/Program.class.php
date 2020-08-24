<?php

class Program
{
    public function run(SvgRenderer $renderer)
    {
        // Création et initialisation d'un rectangle.
        $rectangle1 = new Rectangle();
		$rectangle1->setLocation(50, 20);
        $rectangle1->setColor('cyan');
        $rectangle1->setSize(200, 100);
        
        $rectangle2 = new Rectangle();
		$rectangle2->setLocation(300, 20);
        $rectangle2->setColor('blue');
        $rectangle2->setSize(200, 100);
        
        // Création et initialisation d'un carré (classe Rectangle).
        $rectangle3 = new Rectangle();
		$rectangle3->setLocation(550, 20);
        $rectangle3->setColor('orange');
        $rectangle3->setSize(100, 100);

        // Création et initialisation d'un carré (classe Square).
        $square = new Square();
		$square->setLocation(450, 150);
        $square->setColor('red');
        $square->setOpacity(0.9);
        $square->setSquareSize(80);

        // Création et initialisation d'une ellipse.
        $ellipse1 = new Ellipse();
		$ellipse1->setLocation(70, 200);
        $ellipse1->setColor('deepPink');
        $ellipse1->setSize(50, 70);
        
        $ellipse2 = new Ellipse();
		$ellipse2->setLocation(270, 200);
        $ellipse2->setColor('Chartreuse');
        $ellipse2->setSize(50, 70);
        
        // Création et initialisation d'un cercle.
        $circle = new Circle();
		$circle->setLocation(100, 400);
        $circle->setColor('purple');
        $circle->setRadius(70);
        
        // Création et initialisation d'un triangle ..dream on.
        $triangle = new Triangle();
        $triangle->setPoints(350, 200, 250, 550, 450, 550);
        $triangle->setColor('teal');
        
        
        // Ajout des différents objets géométriques au moteur graphique.
        $renderer->addShape($rectangle1);
        $renderer->addShape($rectangle2);
        $renderer->addShape($ellipse1);
        $renderer->addShape($ellipse2);
        $renderer->addShape($rectangle3);
        $renderer->addShape($circle);
        $renderer->addShape($square);
        $renderer->addShape($triangle);
        
		// Exécution du moteur graphique.
        $renderer->run();
    }
}