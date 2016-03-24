<?php

namespace app\models;

use Yii;
use yii\base\Model;
/**
 * This is the model class for table "liuyan".
 *
 * @property integer $id
 * @property string $liu_content
 */
class Liuyan extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'liuyan';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['liu_content'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'liu_content' => 'Liu Content',
        ];
    }
}
