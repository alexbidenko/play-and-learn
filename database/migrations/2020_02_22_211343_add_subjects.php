<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSubjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('examinations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
        });

        Schema::create('subjects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('examination_id');
            $table->string('title');
        });

        Schema::create('levels', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('subject_id');
            $table->integer('number')->nullable();
            $table->string('title')->nullable();
        });

        Schema::create('tasks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('level_id');
            $table->string('title')->nullable();
            $table->text('text')->nullable();
            $table->string('image')->nullable();
            $table->string('answer')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
