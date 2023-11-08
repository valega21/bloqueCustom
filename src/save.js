import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
} from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 */
// export default function save({ attributes }) {
// 	const blockProps = useBlockProps.save();
// 	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

// 	return (
// 		<div {...innerBlocksProps}>
// 			{/* <InnerBlocks.Content /> */}
// 		</div>
// 	);
// }

// const Save = ({ attributes: { title, description } }) => {
// 	// const blockProps = useBlockProps.save();
// 	return (
// 		<p {...useBlockProps.save()}>
// 			{/* <RichText.Content tagName="title" value={title} className="title" />

// 			<RichText.Content
// 				tagName="description"
// 				value={description}
// 				className="description"
// 			/> */}
// 		</p>
// 	);
// };

// export default Save;


const Save = () => {
  return (
    <div>
      <InnerBlocks.Content />
    </div>
  );
};

export default Save;
