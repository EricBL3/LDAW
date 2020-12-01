<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\RegistrarEmail;

/**
 * @group Email
 *
 * APIs for sending an email.
 */
class EmailController extends Controller
{

    /**
     * Send an email of registration to a recipient
     * 
     * @urlParam email string required email of the recipient. Example: eric@gmail.com
     * 
     * @response {
     *  "message": "Success! Your E-mail has been sent."
     * }
     * 
     * @authenticated
     * 
     * @return String
     */
    public function sendEmail($email) {

        $to_email = $email;
        Mail::to($to_email)->send(new RegistrarEmail);

        if(Mail::failures() != 0) {
            return "<p> Success! Your E-mail has been sent.</p>";
        }

        else {
            return "<p> Failed! Your E-mail has not sent.</p>";
        }
    }
}
