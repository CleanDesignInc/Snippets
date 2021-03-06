import { addPropertyControls, ControlType } from "framer"

export default function GumroadFollow(props) {
    const { text, sellerID } = props

    return (
        <form
            action="https://app.gumroad.com/follow_from_embed_form"
            className="form gumroad-follow-form-embed"
            method="post"
        >
            <style>{css}</style>
            <input name="seller_id" type="hidden" value={sellerID} />
            <input name="email" placeholder="Your email address" type="email" />
            <button data-custom-highlight-color="" type="submit">
                {text}
            </button>
        </form>
    )
}

GumroadFollow.defaultProps = {
    text: "Follow",
    sellerID: "0",
}

addPropertyControls(GumroadFollow, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Follow",
    },
    sellerID: {
        title: "Seller ID",
        type: ControlType.String,
        defaultValue: "0",
    },
})

const css = `
    .gumroad-follow-form-embed {
        zoom: 1;
    }
    .gumroad-follow-form-embed:before,
    .gumroad-follow-form-embed:after {
        display: table;
        line-height: 0;
        content: "";
    }
    .gumroad-follow-form-embed:after {
        clear: both;
    }
    .gumroad-follow-form-embed * {
        margin: 0;
        border: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box !important;
        float: left !important;
    }
    .gumroad-follow-form-embed input {
        border-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 15px;
        line-height: 20px;
        background: #fff;
        border: 1px solid #ddd;
        border-right: 0;
        color: #aaa;
        padding: 10px;
        box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.02);
        background-position: top right;
        background-repeat: no-repeat;
        text-rendering: optimizeLegibility;
        font-smoothing: antialiased;
        -webkit-appearance: none;
        -moz-appearance: caret;
        width: 65% !important;
        height: 40px !important;
    }
    .gumroad-follow-form-embed button {
        border-radius: 4px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
        -webkit-transition: all 0.05s ease-in-out;
        transition: all 0.05s ease-in-out;
        display: inline-block;
        padding: 11px 15px 12px;
        cursor: pointer;
        color: #fff;
        font-size: 15px;
        line-height: 100%;
        font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
        background: #0acf83;
        border: 1px solid #09ba76;
        filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#30f5a9, endColorstr=#09bf79, GradientType=0)";
        background: -webkit-linear-gradient(#30f5a9, #09bf79);
        background: linear-gradient(to bottom, #30f5a9, #09bf79);
        height: 40px !important;
        width: 35% !important;
    }
`
