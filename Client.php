<?php

class Client
{
    public $nomc;
    public $prenomc;
    public $agec;
    public $adressec;
    public $telc;
    public $mailc;
    public $cinc;

    /**
     * Personne constructor.
     * @param $nom
     * @param $prenom
     * @param $age
     */
    public function __construct($nomc, $prenomc, $agec,$adressec, $telc, $mailc, $cinc)
    {
        $this->nomc = $nomc;
        $this->prenomc = $prenomc;
        $this->agec = $agec;
        $this->adressec = $adressec;
        $this->telc = $telc;
        $this->mailc = $mailc;
        $this->cinc = $cinc;
        
        
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nomc;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nomc)
    {
        $this->nomc = $nomc;
    }

    /**
     * @return mixed
     */
    public function getPrenom()
    {
        return $this->prenomc;
    }

    /**
     * @param mixed $prenom
     */
    public function setPrenom($prenomc)
    {
        $this->prenomc = $prenomc;
    }

    /**
     * @return mixed
     */
    public function getAge()
    {
        return $this->agec;
    }

    /**
     * @param mixed $age
     */
    public function setAge($agec)
    {
        $this->agec = $agec;
    }

    /**
     * @return mixed
     */
    public function getAdresse()
    {
        return $this->adressec;
    }

    /**
     * @param mixed $age
     */
    public function setAdresse($adressec)
    {
        $this->adressec = $adressec;
    }

    
    /**
     * @return mixed
     */
    public function getTel()
    {
        return $this->telc;
    }

    /**
     * @param mixed $age
     */
    public function setTel($telc)
    {
        $this->telc = $telc;
    }

       /**
     * @return mixed
     */
    public function getMail()
    {
        return $this->mailc;
    }

    /**
     * @param mixed $age
     */
    public function setMail($mailc)
    {
        $this->mailc = $mailc;
    }

           /**
     * @return mixed
     */
    public function getCin()
    {
        return $this->cinc;
    }

    /**
     * @param mixed $age
     */
    public function setCin($cinc)
    {
        $this->cinc = $cinc;
    }
}
/*
$p= new Client("foulen ","ben foulen",22,"somewhere nice", "12345678", "foulen@gmail.com", "01234567");
echo "le nom est:".$p->getNom()."<br>";
echo "le prenom est:".$p->getPrenom()."<br>";
/*
$p->setPrenom("yassine");
echo "le nouveau prenom est:".$p->getPrenom()."<br>";
*/
/*
echo "l'age est:".$p->getAge()."<br>";
echo "l'adresse est:".$p->getAdresse()."<br>";

*/