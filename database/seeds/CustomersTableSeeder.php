<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomersTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i=0; $i <50 ; $i++) { 

	        DB::table('customers')->insert([
		        'name' => $faker->name,
		        'email' => $faker->unique()->safeEmail,
		        'phone' => $faker->phoneNumber,
		        'website' => $faker->url
	        ]);
        }

    }
}
