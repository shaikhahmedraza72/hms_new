import {environment} from './../../environments/environment'
export class ApiConfig {
    
    // public static URL ="http://localhost:5000/swagger";// environment.apiURL //'http://localhost:8000/'
    public static URL ="http://hmswebapi-dev.us-east-1.elasticbeanstalk.com/";// environment.apiURL //'http://localhost:8000/'
    public static DISH = 'Dish';
    public static DISHCATEGORY = 'DishCategory';
    public static CLIENT = 'Admin';
    public static CLIENTCATEGORY = 'BusinessCategory';
    public static BANKDETAILS = 'bankDetails';
    public static ENDUSER = 'endUser';
    // public static USER = 'UserConfig';
    public static CITY = 'StateCity/GetCity';
    public static STATE = 'StateCity/GetState';
    public static USERFEEDBACK = 'UserFeedback';
    public static MASTERADMIN = 'masterAdmin';
    public static USER = "User";
    public static HOTEL = 'Hotel';
    public static ORDER = 'Order';
    public static INVOICE = 'Invoice'
}