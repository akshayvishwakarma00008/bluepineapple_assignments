//can covert words till billion but can change this code to convert bigger number
//run demo.html to see the output
function num_to_words(num, len, str) {

    num_set = {
        //0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'fourty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        
    };

    if (num < 0) {
        console.log("negative number");
        return "";
    }

    if (num < 21) {
        ans = num_set[num];
        console.log(num + ":" + ans);
    }

    switch (true) {

        case (num > 21 && num < 100):
            tens = parseInt(num / 10) * 10;
            ans = num_set[tens];

            ones = parseInt(num % 10);
            if (ones > 0) {
                ans += " " + num_set[ones];
            }

            console.log(num + ":" + ans);


            break;




        case (len == 3):
            //console.log(len);

            ans = num_set[parseInt(str[0])] + " " + "hundread" + " ";

            if (parseInt(str[1]) != 0) {

                if (parseInt(str[1]) >= 1 && parseInt(str[1]) < 2)
                    ans += num_set[parseInt(((str[1]) * 10)) + parseInt(str[2])] + " ";


                else {
                    ans += num_set[parseInt(str[1] * 10)] + " ";
                    ans += num_set[parseInt(str[2])] + " ";

                }

            }

            console.log(num + ":" + ans);


            break;

        



        case (len == 4):
            //console.log(len);


            if (parseInt(str[0]) != 0) {

                ans = num_set[parseInt(str[0])] + " ";
                ans += "Thousand" + " ";


            }

            ans += num_set[parseInt(str[1])] + " " + "hundread" + " ";

            if (parseInt(str[2]) != 0) {

                if (parseInt(str[2]) >= 1 && parseInt(str[2]) < 2)
                    ans += num_set[parseInt(((str[2]) * 10)) + parseInt(str[3])] + " ";


                else {
                    ans += num_set[parseInt(str[2] * 10)] + " ";
                    ans += num_set[parseInt(str[3])] + " ";

                }

            }

            console.log(num + ":" + ans);


            break;


        



        case (len == 5):
            //console.log(len);


            if (parseInt(str[0]) != 0) {

                if (parseInt(str[0]) >= 1 && parseInt(str[0]) < 2)
                    ans = num_set[parseInt(((str[0]) * 10)) + parseInt(str[1])] + " " + " Thousand" + " ";


                else {
                    ans = num_set[parseInt(str[0] * 10)] + " ";
                    ans += num_set[parseInt(str[1])] + " ";
                    ans += "Thousand" + " ";
                }

            }

            ans += num_set[parseInt(str[2])] + " " + "hundread" + " ";

            if (parseInt(str[3]) != 0) {

                if (parseInt(str[3]) >= 1 && parseInt(str[3]) < 2)
                    ans += num_set[parseInt(((str[3]) * 10)) + parseInt(str[4])] + " ";


                else {
                    ans += num_set[parseInt(str[3] * 10)] + " ";
                    ans += num_set[parseInt(str[4])] + " ";

                }

            }

            console.log(num + ":" + ans);


            break;






        case (len == 6):
            //console.log(len);

            ans = num_set[parseInt(str[0])] + " " + "hundread" + " ";

            if (parseInt(str[1]) != 0) {

                if (parseInt(str[1]) >= 1 && parseInt(str[1]) < 2)
                    ans += num_set[parseInt(((str[1]) * 10)) + parseInt(str[2])] + " " + " Thousand" + " ";


                else {
                    ans += num_set[parseInt(str[1] * 10)] + " ";
                    ans += num_set[parseInt(str[2])] + " ";
                    ans += "Thousand" + " ";
                }

            }

            ans += num_set[parseInt(str[3])] + " " + "hundread" + " ";

            if (parseInt(str[4]) != 0) {

                if (parseInt(str[4]) >= 1 && parseInt(str[4]) < 2)
                    ans += num_set[parseInt(((str[4]) * 10)) + parseInt(str[5])] + " ";


                else {
                    ans += num_set[parseInt(str[1] * 10)] + " ";
                    ans += num_set[parseInt(str[2])] + " ";

                }

            }

            console.log(num + ":" + ans);


            break;




        case (len == 7):
            //console.log(len);
            ans = num_set[parseInt(str[0])] + " " + "Million" + " ";
            ans += num_set[parseInt(str[1])] + " " + "hundread" + " ";

            if (parseInt(str[2]) != 0) {

                if (parseInt(str[2]) >= 1 && parseInt(str[2]) < 2)
                    ans += num_set[parseInt(((str[2]) * 10)) + parseInt(str[3])] + " " + " Thousand" + " ";


                else {
                    ans += num_set[parseInt(str[2] * 10)] + " ";
                    ans += num_set[parseInt(str[3])] + " ";
                    ans += "Thousand" + " ";
                }

            }




            ans += num_set[parseInt(str[4])] + " " + "hundread" + " ";

            if (parseInt(str[5]) != 0) {

                if (parseInt(str[5]) >= 1 && parseInt(str[5]) < 2)
                    ans += num_set[parseInt(((str[5]) * 10)) + parseInt(str[6])] + " ";


                else {
                    ans += num_set[parseInt(str[5] * 10)] + " ";
                    ans += num_set[parseInt(str[6])] + " ";
                }


            }


            console.log(num + ":" + ans);


            break;




        case (len == 8):

            if (parseInt(str[0]) != 0) {

                if (parseInt(str[0]) >= 1 && parseInt(str[0]) < 2) {
                    ans = num_set[parseInt(((str[0]) * 10)) + parseInt(str[1])] + " " + " Million" + " ";
                }
                else {
                    ans = num_set[parseInt(str[0] * 10)] + " ";
                    ans += num_set[parseInt(str[1])] + " ";
                    ans += "Million" + " ";
                }

            }

            ans += num_set[parseInt(str[2])] + " " + "hundread" + " ";

            if (parseInt(str[3]) != 0) {
                if (parseInt(str[3]) >= 1 && parseInt(str[3]) < 2) {
                    ans += num_set[parseInt(((str[3]) * 10)) + parseInt(str[4])] + " " + " Thousand" + " ";
                }
                else {
                    ans += num_set[parseInt(str[3] * 10)] + " ";
                    ans += num_set[parseInt(str[4])] + " ";
                    ans += "Thousand" + " ";
                }

            }
            ans += "thousand" + " ";


            ans += num_set[parseInt(str[5])] + " " + "hundread" + " ";

            if (parseInt(str[6]) != 0) {

                if (parseInt(str[6]) >= 1 && parseInt(str[6]) < 2) {
                    ans += num_set[parseInt(((str[6]) * 10)) + parseInt(str[7])] + " ";
                }
                else {
                    ans += num_set[parseInt(str[6] * 10)] + " ";
                    ans += num_set[parseInt(str[7])] + " ";

                }

            }

            console.log(num + ":" + ans);


            break;





        case (len == 9):
            //console.log(len);



            ans = num_set[parseInt(str[0])] + " " + "hundread" + " ";

            if (parseInt(str[1]) != 0) {

                if (parseInt(str[1]) >= 1 && parseInt(str[1]) < 2)
                    ans += num_set[parseInt(((str[1]) * 10)) + parseInt(str[2])] + " " + " Million" + " ";


                else {
                    ans += num_set[parseInt(str[1] * 10)] + " ";
                    ans += num_set[parseInt(str[2])] + " ";
                    ans += "Million" + " ";
                }

            }

            if (parseInt(str[3]) != 0)
                ans += num_set[parseInt(str[3])] + " " + "hundread" + " ";

            if (parseInt(str[4]) != 0) {

                if (parseInt(str[4]) >= 1 && parseInt(str[4]) < 2)
                    ans += num_set[parseInt(((str[4]) * 10)) + parseInt(str[5])] + " " + " Thousand" + " ";


                else {
                    ans += num_set[parseInt(str[4] * 10)] + " ";
                    ans += num_set[parseInt(str[5])] + " ";
                    ans += "Thousand" + " ";
                }

            }



            if (parseInt(str[6]) != 0)
                ans += num_set[parseInt(str[6])] + " " + "hundread" + " ";


            if (parseInt(str[7]) != 0) {

                if (parseInt(str[7]) >= 1 && parseInt(str[7]) < 2)
                    ans += num_set[parseInt(((str[7]) * 10)) + parseInt(str[8])] + " ";


                else {
                    ans += num_set[parseInt(str[7] * 10)] + " ";
                    ans += num_set[parseInt(str[8])] + " ";
                }


            }
            console.log(num + ":" + ans);

            break;





        case (len == 10):
            //console.log(len);
            ans = num_set[parseInt(str[0])] + " " + "Billion" + " ";

            if (parseInt(str[1]) != 0)
                ans += num_set[parseInt(str[1])] + " " + "hundread" + " ";

            if (parseInt(str[2]) != 0) {

                if (parseInt(str[2]) >= 1 && parseInt(str[2]) < 2)
                    ans += num_set[parseInt(((str[2]) * 10)) + parseInt(str[3])] + " " + " Million" + " ";


                else {
                    ans += num_set[parseInt(str[2] * 10)] + " ";
                    ans += num_set[parseInt(str[3])] + " ";
                    ans += "Million" + " ";
                }

            }

            if (parseInt(str[4]) != 0)
                ans += num_set[parseInt(str[4])] + " " + "hundread" + " ";

            if (parseInt(str[5]) != 0) {

                if (parseInt(str[5]) >= 1 && parseInt(str[5]) < 2)
                    ans += num_set[parseInt(((str[5]) * 10)) + parseInt(str[6])] + " " + " Thousand" + " ";


                else {
                    ans += num_set[parseInt(str[5] * 10)] + " ";
                    ans += num_set[parseInt(str[6])] + " ";
                    ans += "Thousand" + " ";
                }

            }


            if (parseInt(str[7]) != 0)
                ans += num_set[parseInt(str[7])] + " " + "hundread" + " ";

            if (parseInt(str[8]) != 0) {

                if (parseInt(str[8]) >= 1 && parseInt(str[8]) < 2)
                    ans += num_set[parseInt(((str[8]) * 10)) + parseInt(str[9])] + " ";


                else {
                    ans += num_set[parseInt(str[8] * 10)] + " ";
                    ans += num_set[parseInt(str[9])] + " ";

                }

            }

            console.log(num + ":" + ans);


            break;





        case (len == 11):
            //console.log(len);

            if (parseInt(str[0]) >= 1 && parseInt(str[0]) < 2) {
                ans = num_set[parseInt(((str[0]) * 10)) + parseInt(str[1])] + " " + " Billion" + " ";
            }
            else {
                ans = num_set[parseInt(str[0] * 10)] + " ";
                ans += num_set[parseInt(str[1])] + " ";
                ans += "Billion" + " ";
            }


            if (parseInt(str[2]) != 0)
                ans += num_set[parseInt(str[2])] + " " + "hundread" + " ";

            if (parseInt(str[3]) >= 1 && parseInt(str[3]) < 2) {
                ans += num_set[parseInt(((str[3]) * 10)) + parseInt(str[4])] + " " + " Million" + " ";
            }
            else {
                ans += num_set[parseInt(str[3] * 10)] + " ";
                ans += num_set[parseInt(str[4])] + " ";
                ans += "Million" + " ";
            }

            if (parseInt(str[5]) != 0)
                ans += num_set[parseInt(str[5])] + " " + "hundread" + " ";


            if (parseInt(str[6]) >= 1 && parseInt(str[6]) < 2) {
                ans += num_set[parseInt(((str[6]) * 10)) + parseInt(str[7])] + " " + " Thousand" + " ";
            }
            else {
                ans += num_set[parseInt(str[6] * 10)] + " ";
                ans += num_set[parseInt(str[7])] + " ";
                ans += "Thousand" + " ";
            }

            if (parseInt(str[8]) != 0)
                ans += num_set[parseInt(str[8])] + " " + "hundread" + " ";

            if (parseInt(str[9]) >= 1 && parseInt(str[9]) < 2) {
                ans += num_set[parseInt(((str[9]) * 10)) + parseInt(str[10])] + " ";
            }
            else {
                ans += num_set[parseInt(str[9] * 10)] + " ";
                ans += num_set[parseInt(str[10])] + " ";
            }


            console.log(num + ":" + ans);

            break;




        case (len == 12):
            //console.log(len);
            ans = num_set[parseInt(str[0])] + " Hundread ";

            if (parseInt(str[1]) != 0) {

                if (parseInt(str[1]) >= 1 && parseInt(str[1]) < 2)
                    ans += num_set[parseInt(((str[1]) * 10)) + parseInt(str[2])] + " " + " Billion" + " ";


                else {
                    ans += num_set[parseInt(str[1] * 10)] + " ";
                    ans += num_set[parseInt(str[2])] + " ";
                    ans += "Billion" + " ";
                }

            }

            if (parseInt(str[3]) != 0)
                ans += num_set[parseInt(str[3])] + " " + "hundread" + " ";


            if (parseInt(str[4]) != 0) {

                if (parseInt(str[4]) >= 1 && parseInt(str[4]) < 2)
                    ans += num_set[parseInt(((str[4]) * 10)) + parseInt(str[5])] + " " + " Million" + " ";


                else {
                    ans += num_set[parseInt(str[4] * 10)] + " ";
                    ans += num_set[parseInt(str[5])] + " ";
                    ans += "Million" + " ";
                }

            }

            if (parseInt(str[6]) != 0)
                ans += num_set[parseInt(str[6])] + " " + "hundread" + " ";

            if (parseInt(str[7]) != 0) {

                if (parseInt(str[7]) >= 1 && parseInt(str[7]) < 2)
                    ans += num_set[parseInt(((str[7]) * 10)) + parseInt(str[8])] + " " + " Thousand" + " ";


                else {
                    ans += num_set[parseInt(str[7] * 10)] + " ";
                    ans += num_set[parseInt(str[8])] + " ";
                    ans += "Thousand" + " ";
                }

            }


            if (parseInt(str[9]) != 0)
                ans += num_set[parseInt(str[9])] + " " + "hundread" + " ";

            if (parseInt(str[10]) != 0) {

                if (parseInt(str[10]) >= 1 && parseInt(str[10]) < 2)
                    ans += num_set[parseInt(((str[10]) * 10)) + parseInt(str[11])] + " ";


                else {
                    ans += num_set[parseInt(str[1] * 10)] + " ";
                    ans += num_set[parseInt(str[2])] + " ";
                }

            }

            console.log(num + ":" + ans);

            break;
    }





}

val = prompt("enter the number");
num = parseInt(val);
var len = val.length;
//console.log(len);

num_to_words(num, len, val);
