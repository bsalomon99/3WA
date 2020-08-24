<?php

class Triangle extends Shape
{
	private $points;

    
	public function __construct()
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct();
		$point1 = new Point();
        $point2 = new Point();
        $point3 = new Point();
	    $this->points = [$point1 ,$point2 ,$point3 ];
	}

	public function draw(SvgRenderer $renderer)
	{
		// Utilisation de l'objet renderer pour dessiner un rectangle avec ses propriétés.
		$renderer->drawTriangle
		(
			// tableau de 3 points 
            $this->points,
            $this->color,
			$this->opacity
			
		);
	}

	public function setPoints( $x1, $y1, $x2, $y2, $x3, $y3)
	{
		$this->points[0]->moveTo($x1,$y1); // modifie les coordonnées du premier point
		$this->points[1]->moveTo($x2,$y2);
		$this->points[2]->moveTo($x3,$y3);
	}
}
