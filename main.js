function lesson1()
{
    let a = +prompt('nhập số a:');
    let b = +prompt('nhập số b: ');
    if (a % b == 0)
    {
        alert(a + ' chia hết cho ' +b)
    }
    else alert(a + ' không chia hết cho ' +b)
}
function lesson2()
{
    let a =+prompt('nhập tuổi của học sinh: ');
    if (a >= 16 )
    {
        document.write('Học sinh đủ tuổi để học lớp 10')
    }
    else document.write('Học sinh chưa đủ tuổi học lớp 10')
}
function lesson3()
{
   let a =+prompt('Nhập số nguyên: ')
    if (a >0){
        alert( a + ' là số lớn hơn 0')
    }else alert(a + ' là số nhỏ hơn 0')
}
function lesson4()
{
    let a = +prompt('nhap số a')
    let b = +prompt('nhap số b')
    let c = +prompt('nhap số c')
    if (a > b && a > c) document.write( a +' là số lớn nhất');
    if (b > a && b > c) document.write( b +' là số lớn nhẩt');
    if (c > a && c > b) document.write( c +' là số lớn nhẩt');

}
function lesson5()
{
    let a = +prompt('Điểm bài kiểm tra');
    let b = +prompt('Điểm thi giữa kỳ');
    let c = +prompt('Điểm thi cuối kỳ');
    let d = (a + b + c)/3
    if ( d >= 9)
    {
     document.write('Đạt hạng A điểm trung bình là: '+d)
    }
    else if (d >= 7)
    {
        document.write(' Đạt hạng B điểm trung bình là: '+d)
    }
    else if (d>= 5)
    {
        document.write('Đạt hạng C điểm trung bình là: '+d)
    }
    else document.write('Đạt hạng F điểm trung bình là: '+d +' Học lại')
}
function lesson6()
{
   let a = +prompt('nhập doanh số tháng này của bạn')

    if (a>300)
    {
        doanhso = a*20/100;
    }
    else if (a > 100)
    {
        doanhso=a*10/100;
    }
    else
    {
       doanhso =a*5/100;
    }
    document.write('Với doanh số tháng là: '+a+' triệu thì hoa hồng của bạn là: '+doanhso+' triệu')
}
function lesson7()
{
    let a = +prompt('Tháng này gia đình bạn gọi bao nhiêu phút điện thoại?')
    let b=25000;
    if (a > 200)
    {
        phi = (a - 200)*200+150*400+50*600;
    }
    else if (a>50)
    {
        phi= (a-50)*400+50*600;
    } else
    {
        phi = a*600;
    }
    document.write('với số phút gọi là: ' +a + 'phút' +'<br>')
    document.write('Cước điện thoại của hộ gia đình bạn là: ' +(phi+b))
}
