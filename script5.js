var pemain1 = 'Edwin';
var pemain2 = 'Panda';
var pemain3 = ''

var tinggibadan1 = 165;
var tinggibadan2 = 172;
var tinggibadan3 = 182;


var umur1 = 21;
var umur2 = 25;
var umur3 = 29;


var skor1 = tinggibadan1 + (5 * umur1);
var skor2 = tinggibadan2 + (5 * umur2);
var skor3 = tinggibadan3 + (5 * umur3);


if((skor1>skor2)&&(skor1>skor3)){
        console.log(pemain1 + 'dengan skor = ' + skor1);
    
    }else if((skor2>skor1)&&(skor2>skor3)){
            console.log(pemain2 + 'dengan skor = ' +skor2);
             }

else if((skor3>skor1)&&(skor3>skor2)){
            console.log(pemain3 + 'dengan skor = ' +skor3);
             }

    else if((skor3==skor1)&&(skor3==skor2)){
            console.log('Seimbang');
             }