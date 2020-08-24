<?php

class Circle extends Shape
{
	protected $radius;

    
	public function __construct()
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct();

		$this->radius = 0;
		
	}

	public function draw(SvgRenderer $renderer)
	{
		// Utilisation de l'objet renderer pour dessiner un rectangle avec ses propriétés.
		$renderer->drawCircle
		(
			$this->location,
			$this->color,
			$this->opacity,
			$this->radius
			
		);
	}

	public function setRadius($radius)
	{
		$this->radius = $radius;
		
	}
}