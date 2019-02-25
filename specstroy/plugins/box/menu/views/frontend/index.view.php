<?php

    $anchor_active = '';
    $li_active = '';
    $target = '';

    if (count($items) > 0) {
        foreach ($items as $item) {

            $item['link'] = Html::toText($item['link']);
            $item['name'] = Html::toText($item['name']);

            $pos = strpos($item['link'], 'http://');
            if ($pos === false) {
                $link = Option::get('siteurl').'/'.$item['link'];
            } else {
                $link = $item['link'];
            }

            if (isset($uri[1])) {
                $child_link = explode("/",$item['link']);
                if (isset($child_link[1])) {
                    if (in_array($child_link[1], $uri)) {
                        $anchor_active = 'current';
                        $li_active = 'active';
                    }
                }
            }

            if (isset($uri[0]) && $uri[0] !== '') {
                if (in_array($item['link'], $uri)) {
                    $anchor_active = 'current';
                    $li_active = 'active';
                }
            } else {
                if ($defpage == trim($item['link'])) {
                    $anchor_active = 'current';
                    $li_active = 'active';
                }
            }

            if (trim($item['target']) !== '') {
                $target = ' target="'.$item['target'].'" ';
            }

            echo '<li class="'.$li_class.' '.$li_active.'">'.'<a class="'.$a_class.' '.$anchor_active.$target.'" href="'.$link.'">'.$item['name'].'</a>'.'</li>';

            $anchor_active = '';
            $li_active = '';
            $target = '';
        }
    }
