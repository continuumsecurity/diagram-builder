package org.vaadin.diagrambuilder.dto;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class NodeDto extends EventDto {

    @Override
    @JsonGetter("clientY")
    public Double getTop() {
        return super.getTop();
    }

    @Override
    @JsonGetter("clientX")
    public Double getLeft() {
        return super.getLeft();
    }

}
