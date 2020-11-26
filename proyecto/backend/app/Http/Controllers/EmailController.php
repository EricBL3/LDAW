<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\RegistrarEmail;

class EmailController extends Controller
{
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
