// The raw data to observe
var stats = [
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
]

// A polygon graph component
Vue.component('polygraph', {
  props: ['stats'],
  template: '#polygraph-template',
  computed: {
    // a computed propery_position for the polygon's points
    points: function () {
      var total = this.stats.length
      return this.stats.map(function (stat, i) {
        var point = valueToPoint(stat.value, i, total)
        return point.x + ',' + point.y
      }).join(' ')
    }
  },
  components: {
    'axis-label': {
      props: {
        stat: Object,
        index: Number,
        total: Number
      },
      template: '#axis-label-template',
      computed: {
        point: function () {
          return valueToPoint(
            +this.stat.value + 10,
            this.index,
            this.total
          )
        }
      }
    }
  }
})

function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.8
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var x_position    = x * cos - y * sin + 100
  var y_position    = x * sin + y * cos + 100
  return {
    x: x_position,
    y: y_position
  }
}

// bootstrap the demo
new Vue({
  el: '#demo',
  data: {
    newLabel: '',
    stats: stats
  },
  methods: {
    add: function (e) {
      e.preventDefault()
      if (!this.newLabel)
      {
        return
      }
      this.stats.push({
        label: this.newLabel,
        value: 100
      })
      this.newLabel = ''
    },
    remove: function (stat) {
      if (this.stats.length > 3) {
        this.stats.splice(this.stats.indexOf(stat), 1)
      } else {
        alert('Can\'t delete more, there must be a least 3 angles!')
      }
    },
    
    shrink: function (stat) {
      var checker = true;
      for(var i = 0; i < this.stats.length; i++){
          if(this.stats[i].value > 10){
              this.stats[i].value = this.stats[i].value / 2;
          }
          else{
              checker = false;
          }
      }
      if(checker === false){
          alert('It is very small already!')
      }
    },
    
    enlarge: function (stat) {
      for(var i = 0; i < this.stats.length; i++){
          if(this.stats[i].value < 50){
              this.stats[i].value = this.stats[i].value * 2;
          }
          else{
              this.stats[i].value = 100;
          }
      }
    },
    
    clear: function (stat){
      this.stats = [];  
    },
    
    trangle: function (stat){
        this.clear(stat);
        for(var i = 0; i < 3;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    square: function (stat){
        this.clear(stat);
        for(var i = 0; i < 4;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    pentagon: function (stat){
        this.clear(stat);
        for(var i = 0; i < 5;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    hexagon: function (stat){
        this.clear(stat);
        for(var i = 0; i < 6;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    heptagon: function (stat){
        this.clear(stat);
        for(var i = 0; i < 7;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    octagon: function (stat){
        this.clear(stat);
        for(var i = 0; i < 8;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    nonagon: function (stat){
        this.clear(stat);
        for(var i = 0; i < 9;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    decagon: function (stat){
        this.clear(stat);
        for(var i = 0; i < 10;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    dodecagon: function (stat){
        this.clear(stat);
        for(var i = 0; i < 12;i++){
            this.newLabel = String.fromCharCode(97 + i).toUpperCase();
              this.stats.push({
            label: this.newLabel,
            value: 100
          })   
        }
    },
    
    
    
    
    
  }
})