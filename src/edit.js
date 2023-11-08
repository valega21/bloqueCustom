import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";
import { withSelect } from "@wordpress/data";

const Edit = ({ postCategories }) => {
	const blockProps = useBlockProps();

	const MY_TEMPLATE_TITLE = [
		["core/heading", { placeholder: "Ingresar título" }],
		["core/paragraph", { placeholder: "Ingresar descripción" }],
	];

	// Verifica las categorías del post
	const categories = postCategories.map((category) => category.slug);

	// Aplica estilos según la categoría
	const blockStyle =
		categories && categories.includes("nacional")
			? { backgroundColor: "#00b049", color: "#ffffff" }
			: categories && categories.includes("entretenimiento")
			? { backgroundColor: "#ffc915", color: "#ffffff" }
			: categories && categories.includes("tecnologia")
			? { backgroundColor: "#00d3f8", color: "#ffffff" }
			: categories && categories.includes("mascotas")
			? { backgroundColor: "#90456d", color: "#ffffff" }
			: categories && categories.includes("deportes")
			? { backgroundColor: "#ff372c", color: "#ffffff" }
			: {};

	return (
		<div {...blockProps} style={blockStyle}>
			<InnerBlocks template={MY_TEMPLATE_TITLE} templateLock="all" />
		</div>
	);
};

// export default Edit;

export default withSelect((select, { clientId }) => {
	const { getEditedPostAttribute } = select("core/editor");
	const postId = getEditedPostAttribute("id");
	const { getEntityRecords } = select("core");

	const postCategories = getEntityRecords("taxonomy", "category", {
		per_page: -1,
		post: postId,
	});

	return {
		postCategories: postCategories || [],
	};
})(Edit);
