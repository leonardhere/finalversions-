<?php

/* list.html */
class __TwigTemplate_0272d28026bf48193b3efa17cc06cc64 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("base.html");

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        echo "Серия романов о Гарри Поттере";
    }

    // line 7
    public function block_content($context, array $blocks = array())
    {
        // line 8
        echo "<h1>Серия романов о Гарри Поттере</h1>

<div id=\"books\">
    ";
        // line 11
        if (isset($context["books"])) { $_books_ = $context["books"]; } else { $_books_ = null; }
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($_books_);
        foreach ($context['_seq'] as $context["_key"] => $context["book"]) {
            // line 12
            echo "    <div class=\"book\">
    \t<strong>";
            // line 13
            if (isset($context["book"])) { $_book_ = $context["book"]; } else { $_book_ = null; }
            echo twig_escape_filter($this->env, $this->getAttribute($_book_, "number"), "html", null, true);
            echo "</strong>. \"<em>";
            if (isset($context["book"])) { $_book_ = $context["book"]; } else { $_book_ = null; }
            echo twig_escape_filter($this->env, $this->getAttribute($_book_, "title"), "html", null, true);
            echo "\"</em> - ";
            if (isset($context["book"])) { $_book_ = $context["book"]; } else { $_book_ = null; }
            echo twig_escape_filter($this->env, $this->getAttribute($_book_, "date"), "html", null, true);
            echo "
    </div>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['book'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        // line 16
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "list.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 16,  51 => 13,  48 => 12,  43 => 11,  38 => 8,  35 => 7,  29 => 5,);
    }
}
