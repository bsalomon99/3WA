<?php

    class Square extends Rectangle
    {
        public function setSquareSize( $size )
        {
            $this->width = $size;
            $this->height = $size;
        }
    }

?>