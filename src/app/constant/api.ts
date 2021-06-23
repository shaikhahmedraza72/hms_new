<<<<<<< HEAD
export class ApiConfig {
    public static URL = 'http://webapplication121-dev.us-east-2.elasticbeanstalk.com/';//'http://localhost:8000/'
    public static DISH = 'dish'
    public static DISHCATEGORY = 'dishCategory'
    public static CLIENT = 'client'
    public static CLIENTCATEGORY = 'clientCategory'
    public static BANKDETAILS = 'bankDetails'
    public static ENDUSER = 'endUser'
    public static USER = 'user'
    public static CITY = 'city'
    public static STATE = 'state'
    public static USERFEEDBACK = 'userFeedback'
    public static MASTERADMIN = 'masterAdmin'
    public static USERLOGIN = 'userLogin'
}

=======
import {environment} from './../../environments/environment'
export class ApiConfig {
    public static URL = environment.apiURL //'http://localhost:8000/'
    public static DISH = 'dish'
    public static DISHCATEGORY = 'dishCategory'
    public static CLIENT = 'client'
    public static CLIENTCATEGORY = 'clientCategory'
    public static BANKDETAILS = 'bankDetails'
    public static ENDUSER = 'endUser'
    public static USER = 'user'
    public static CITY = 'city'
    public static STATE = 'state'
    public static USERFEEDBACK = 'userFeedback'
}

>>>>>>> e41bbbea95796848fa583b6ed59f059a62d067e4
