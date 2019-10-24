<?php

namespace App\Faker;

use Faker\Provider\Base;

class BaseFaker
{
    protected $randomDistribution = [];

    /**
     * From given member name
     */
    public function getDistributedElement($name)
    {
        $elements = $this->$name;

        return $elements[$this->getDistributedIndex($name, count($elements))];
    }

    public function getDistributedIndex($key, $total)
    {
        if ($total <= 0)
            throw new \Exception('Must be higher than 0');

        if (!isset($this->randomDistribution[$key]))
            $this->randomDistribution[$key] = [
                'total' => $total,
                'indexes' => $this->generateDistribution($total)
            ];

        // reset and recall
        if (count($this->randomDistribution[$key]['indexes']) === 0) {
            unset($this->randomDistribution[$key]);
            return $this->getDistributedIndex($key, $total);
        }

        $index = array_pop($this->randomDistribution[$key]['indexes']);

        return $index;
    }

    protected function generateDistribution($total)
    {
        $arr = [];

        for ($i = 0; $i < $total; $i++) {
            $arr[] = $i;
        }

        shuffle($arr);

        return $arr;
    }
}