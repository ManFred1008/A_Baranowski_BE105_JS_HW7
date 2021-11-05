// Калькулятор

let Calc = function() {
   this.onOff = function() {
      this.turn = confirm('Вы хотите включить калькулятор?');
      if (this.turn) {
         this.get();
      }
   }

   this.get = function() {
      this.a = +prompt('Введите первое число: a', 54);
      this.sign = prompt('Введите знак оперции: +, -, *, /, ^, %(остаток от деления a на b)', '+');
      this.b = +prompt('Введите второе число: b', 46);

      this.oper();    
   }

   this.oper = function() {
      switch(this.sign) {
         case '+':
            this.result = this.a + this.b;
         break;

         case '-':
            this.result = this.a - this.b;
         break;

         case '*':
            this.result = this.a * this.b;
         break;

         case '/':
            this.result = this.a / this.b;
         break;

         case '^':
            this.result = Math.pow(this.a, this.b);
         break;

         case '%':
            this.result = this.a % this.b;
         break;

         default: this.result = 0;
      }
      this.show();
   }

   this.show = function() {
      alert(this.a + ' ' + this.sign + ' ' + this.b + ' = ' + this.result);
   }
}

let calc = new Calc();

calc.onOff();

//-----------------------------------------------------------------
// Лампочка

let Lamp = function() {

   this.info = function() {
      this.power = +prompt('Введите мощность лампочки, Вт:', 10);
      this.price = +prompt('Введиет стоимость электроэн., руб./Вт*ч', 2);
      this.onOff();
   }

   this.onOff = function() {
      this.turn = confirm('Включить или выключить лампочку?');
      this.count();
   }

   this.count = function() {
      if (this.turn == false) {
         this.timeOn = '0';
      } else {
         for (let i = 0; this.turn == true; i++) {
            if (i == 0) {
               this.timeOn = new Date().getMinutes() + ':' + new Date().getSeconds();
            }
            this.turn = confirm('Лампа включена. cansel - выключить лампочку?');
         }
      }
      
      this.timeOff = new Date().getMinutes() + ':' + new Date().getSeconds();
      console.log(this.timeOn, this.timeOff);
      this.result();
   }

   this.result = function() {
      let arrOn = this.timeOn.match(/\d+/g);
      let arrOff = this.timeOff.match(/\d+/g);
      console.log(arrOn, arrOff);
      let on = arrOn[0] / 60 + arrOn[1] / 3600;
      let off = arrOff[0] / 60 + arrOff[1] / 3600;
      console.log(on, off);
      this.allTime = off - on;

      this.res = (this.allTime * this.power) / this.price;
      console.log(this.allTime, this.res);
      this.show();
   }

   this.show = function() {
      alert('Мощность лампы: ' + this.power + ' Вт,\n' + 'Стоимость эл. энергии: ' + this.price + ' руб/Вт*ч,\n' + 'Лампа горела: ' + Math.round(this.allTime * 1000) / 1000 + ' ч.,\n' + 'Заплатите ' + Math.round(this.res * 1000) / 1000 + ' руб.');
   }
}

let lamp = new Lamp();

lamp.info();

//-------------------------------------------------------------------------
// Чайник

let Kettle = function() {

   this.data = function() {
      this.power = +prompt('Укажите мощность чайника, Вт', 2000);
      this.size = +prompt('Укажите объём чайника, л', 2);
      this.water = +prompt('Объем воды, л', 1);
      this.energy = 4200 * this.size * (100 - 21);  // кол. Дж энергии для закипания 2л воды
      this.onOff();
   };

   this.onOff = function() {
      this.turn = confirm('Включить чайник?');
      if (this.turn) {
         this.count();
      } else this.onOff();
   };

   this.count = function() {
      this.time = this.energy * (this.water / this.size) / this.power;
      this.print();
   };

   this.print = function() {
      alert('Мощность чайника: ' + this.power + ' Вт\nОбъём чайника: ' + this.size + ' л\nОбъём воды: ' + this.water + ' л\nВремя закипания воды: ' + this.time + ' сек.');
   };
};

let kettle = new Kettle();

kettle.data();