<?php 

namespace App\Traits;

trait SubmitRequestTrait {

    function submitRequest($url,$post_string,$headers, $type)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_TIMEOUT, 90);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        if($type=="POST")
        {
            curl_setopt($ch, CURLOPT_POST,TRUE);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS,  $post_string);
        }
        $data = curl_exec($ch);
        return  $data;
    }
}
?>