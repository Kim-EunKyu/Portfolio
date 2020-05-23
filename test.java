public class Solution {
    public int solution(int p) {
        int count = 0;
        int answer = 0;
        int temp = p;
        String Str = ""; 
            while(true){
                temp +=1;
              Str = Integer.toString(temp); 
            for(int i = 1;i<10;i++){
                for(int j = 0; j <Str.length();j++){
                    if(Str.charAt(j) == Character.forDigit(i, 10)){
                        count++;
                    }
                }
                if(count > 1){
                    count = 0;
                    break;
                }else{
                    answer = Integer.parseInt(Str);
                    return answer;
                }
            }

            return answer;   
            }
    }
}