//llamar a los modulos
var gulp 	= require('gulp');
var uglify 	= require('gulp-uglifyjs');
var coffee 	= require('gulp-coffee');

//asignar rutas a variables
var coffeO 	= 'js/coffee/*.coffee';

//crear una tarea
gulp.task('compilar', function(){
	//trae todo los .coffe y comprime a 1 fichero minificado
	return gulp.src(coffeO)
		.pipe(coffee({bare:true}))
		.pipe(uglify('main.min.js', {
			outSourceMap: true
		}))
		.pipe(gulp.dest('./js/'))
});

//crear tarea para observar cambios
gulp.task('watchingiu', function(){
	gulp.watch(coffeO, ['compilar']);
});