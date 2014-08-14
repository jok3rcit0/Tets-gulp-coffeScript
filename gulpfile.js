//llamar a los modulos
var gulp 	= require('gulp');
var uglify 	= require('gulp-uglify');

//asignar rutas a variables
var coffeO 	= 'js/coffe/*.js';
var jsDes 	= 'js/';

//crear una tarea
gulp.task('scripts', function(){
	//trae todo los .coffe y comprime a 1 fichero minificado
	return gulp.src(coffeO)
		.pipe(uglify('main.min.js'))
		.pipe(gulp.dest(jsDes));
});
