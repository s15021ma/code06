const FEMALE = 0;
const MALE = 1;
const MISC = 2;
const MARRIED = true;
const UNMARRIED = false;

const CAMPAIGN_MARRIED_MALE = 1;
const CAMPAIGN_UNMARRIED_FEMALE = 2;
const CAMPAIGN_MARRIED_FEMALE = 3;
const CAMPAIGN_OTHERS = 4;

function campaignNumber(age, sex, married){
    if(age >= 30 && married && sex == 1){
        return 1
    }else if(20 <= age <= 29 && unmarried && sex == 0){
        return 2
    }
}
